import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
  Rating,
  Stack,
  TextField,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { hasSchoolImage, schoolImages } from "../utils/schoolImages";
import { schoolsData } from "../utils/schoolsData";

const SCHOOL_FALLBACK_IMAGE = "/images/schools/generated-school-fallback.png";
const API_BASE_URL = "https://api.escoala.md/api";
const LOCAL_REVIEWS_STORAGE_KEY = "eschool.localSchoolReviews";

const normalizeSchoolName = (name = "") =>
  name
    .trim()
    .toLowerCase()
    .replace(/[„“”"]/g, "")
    .replace(/\s+/g, " ");

const uniqueSchoolsByName = (schools) => {
  const seen = new Set();

  return schools.filter((school) => {
    const normalizedName = normalizeSchoolName(school?.name);

    if (!normalizedName || seen.has(normalizedName)) {
      return false;
    }

    seen.add(normalizedName);
    return true;
  });
};

const sortSchoolsByImages = (schools) =>
  [...schools].sort((firstSchool, secondSchool) => {
    const firstHasImage = hasSchoolImage(firstSchool);
    const secondHasImage = hasSchoolImage(secondSchool);

    if (firstHasImage === secondHasImage) {
      return 0;
    }

    return firstHasImage ? -1 : 1;
  });

const prepareSchools = (schools) => sortSchoolsByImages(uniqueSchoolsByName(schools));

const getSchoolReviewKey = (school) => String(school?.id);

const normalizeReviewsResponse = (data) => {
  if (Array.isArray(data)) {
    return data;
  }

  if (Array.isArray(data?.data)) {
    return data.data;
  }

  return [];
};

const getAverageRating = (reviews) => {
  if (!reviews.length) return 0;

  const total = reviews.reduce((sum, review) => sum + Number(review.rating), 0);
  return total / reviews.length;
};

const getSchoolImageCandidates = (school) => [
  schoolImages[String(school.id)],
  `/images/schools/${school.id}.png`,
  `/images/schools/${school.id}.jpg`,
  `/images/schools/${school.id}.jpeg`,
  `/images/schools/${school.id}.webp`,
  school.image,
  SCHOOL_FALLBACK_IMAGE,
];

const SchoolCardImage = ({ school }) => {
  const imageCandidates = getSchoolImageCandidates(school).filter(Boolean);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <CardMedia
      component="img"
      height="140"
      image={imageCandidates[imageIndex]}
      alt={school.name}
      onError={() => {
        setImageIndex((currentIndex) =>
          Math.min(currentIndex + 1, imageCandidates.length - 1)
        );
      }}
      sx={{
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
    />
  );
};

const Schools = () => {
  const { t } = useTranslation();
  const [schools, setSchools] = useState(() => prepareSchools(schoolsData));
  const [reviewsBySchool, setReviewsBySchool] = useState({});
  const [localReviewsBySchool, setLocalReviewsBySchool] = useState({});
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [reviewsError, setReviewsError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittingReview, setSubmittingReview] = useState(false);
  const fetchedReviewIds = useRef(new Set());
  const [reviewForm, setReviewForm] = useState({
    author: "",
    rating: 0,
    comment: "",
  });

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const publicSchools = data?.data?.school_sector?.schools || [];
        setSchools(prepareSchools([...publicSchools, ...schoolsData]));
      })
      .catch(() => {
        setSchools(prepareSchools(schoolsData));
      });
  }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}/schools`)
      .then((response) => response.json())
      .then((data) => {
        setSchools((currentSchools) =>
          prepareSchools([...(data?.data || []), ...currentSchools])
        );
      })
      .catch((error) => console.error("Error fetching schools:", error));
  }, []);

  useEffect(() => {
    const savedLocalReviews = localStorage.getItem(LOCAL_REVIEWS_STORAGE_KEY);

    if (savedLocalReviews) {
      setLocalReviewsBySchool(JSON.parse(savedLocalReviews));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_REVIEWS_STORAGE_KEY,
      JSON.stringify(localReviewsBySchool)
    );
  }, [localReviewsBySchool]);

  useEffect(() => {
    const schoolsToFetch = schools.filter((school) => {
      const schoolId = getSchoolReviewKey(school);
      return schoolId && !fetchedReviewIds.current.has(schoolId);
    });

    if (!schoolsToFetch.length) {
      return;
    }

    schoolsToFetch.forEach((school) => {
      fetchedReviewIds.current.add(getSchoolReviewKey(school));
    });

    Promise.all(
      schoolsToFetch.map((school) =>
        fetch(`${API_BASE_URL}/schools/${school.id}/reviews`)
          .then((response) => {
            if (!response.ok) {
              return [];
            }

            return response.json();
          })
          .then((data) => [getSchoolReviewKey(school), normalizeReviewsResponse(data)])
          .catch(() => [getSchoolReviewKey(school), []])
      )
    ).then((reviewsEntries) => {
      setReviewsBySchool((currentReviews) => {
        const nextReviews = { ...currentReviews };

        reviewsEntries.forEach(([schoolId, reviews]) => {
          nextReviews[schoolId] = reviews;
        });

        return nextReviews;
      });
    });
  }, [schools]);

  const selectedSchoolReviews = selectedSchool
    ? [
        ...(reviewsBySchool[getSchoolReviewKey(selectedSchool)] || []),
        ...(localReviewsBySchool[getSchoolReviewKey(selectedSchool)] || []),
      ]
    : [];

  const getSchoolReviews = (school) => [
    ...(reviewsBySchool[getSchoolReviewKey(school)] || []),
    ...(localReviewsBySchool[getSchoolReviewKey(school)] || []),
  ];

  const saveReviewLocally = (school, review) => {
    const schoolKey = getSchoolReviewKey(school);

    setLocalReviewsBySchool((currentReviews) => ({
      ...currentReviews,
      [schoolKey]: [...(currentReviews[schoolKey] || []), review],
    }));
  };

  const handleOpenReviews = (school) => {
    setSelectedSchool(school);
    setReviewsError("");
    setSubmitSuccess(false);
    setReviewForm({ author: "", rating: 0, comment: "" });
  };

  const handleCloseReviews = () => {
    setSelectedSchool(null);
    setReviewsError("");
    setSubmitSuccess(false);
    setReviewForm({ author: "", rating: 0, comment: "" });
  };

  const handleSubmitReview = async (event) => {
    event.preventDefault();

    if (!selectedSchool || !reviewForm.rating || !reviewForm.comment.trim()) {
      return;
    }

    setSubmittingReview(true);
    setReviewsError("");
    setSubmitSuccess(false);
    const fallbackReview = {
      id: `local-${Date.now()}`,
      schoolId: selectedSchool.id,
      schoolName: selectedSchool.name,
      author: reviewForm.author.trim() || t("schools.anonymous"),
      rating: reviewForm.rating,
      comment: reviewForm.comment.trim(),
      createdAt: new Date().toISOString(),
      isLocal: true,
    };

    try {
      const response = await fetch(
        `${API_BASE_URL}/schools/${selectedSchool.id}/reviews`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            author: reviewForm.author.trim() || t("schools.anonymous"),
            rating: reviewForm.rating,
            comment: reviewForm.comment.trim(),
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit review");
      }

      setSubmitSuccess(true);
      setReviewForm({ author: "", rating: 0, comment: "" });
    } catch (error) {
      saveReviewLocally(selectedSchool, fallbackReview);
      setSubmitSuccess(true);
      setReviewsError(t("schools.reviewSavedLocally"));
      setReviewForm({ author: "", rating: 0, comment: "" });
    } finally {
      setSubmittingReview(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#EAFBEA",
        padding: "50px 0",
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "40px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "bold",
            color: "#388E3C",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {t("schools.title")}
        </Typography>

        <Grid container spacing={4}>
          {schools.map((school) => {
            const schoolReviews = getSchoolReviews(school);
            const reviewsCount = schoolReviews.length;
            const shouldShowRating = reviewsCount >= 5;
            const averageRating = getAverageRating(schoolReviews).toFixed(1);

            return (
              <Grid item xs={12} sm={6} md={4} key={getSchoolReviewKey(school)}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#F1F8E9",
                    borderRadius: "20px",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                    display: "flex",
                    flexDirection: "column",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <SchoolCardImage school={school} />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontFamily: "'Roboto', sans-serif",
                        textAlign: "center",
                        color: "#2E7D32",
                      }}
                    >
                      {school.name}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1.5,
                        textAlign: "center",
                        color: "#4f6f52",
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      {shouldShowRating
                        ? `${averageRating} ⭐ (${reviewsCount} ${t(
                            "schools.reviews"
                          )})`
                        : `${reviewsCount} ${t("schools.reviews")}`}
                    </Typography>

                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      flexWrap="wrap"
                      sx={{ mt: "auto", pt: 2 }}
                    >
                      <Button
                        component={Link}
                        to={`/schools/${school.id}`}
                        variant="contained"
                        color="success"
                        sx={{
                          textTransform: "none",
                          borderRadius: "20px",
                          padding: "8px 18px",
                          fontSize: "13px",
                          fontWeight: "bold",
                        }}
                      >
                        {t("schools.details")}
                      </Button>
                      <Button
                        variant="outlined"
                        color="success"
                        size="small"
                        onClick={() => handleOpenReviews(school)}
                        sx={{
                          textTransform: "none",
                          borderRadius: "20px",
                          fontSize: "13px",
                          fontWeight: "bold",
                          backgroundColor: "#fff",
                        }}
                      >
                        {t("schools.readReviews")}
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      <Dialog
        open={Boolean(selectedSchool)}
        onClose={handleCloseReviews}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 24px 70px rgba(34, 105, 50, 0.22)",
          },
        }}
      >
        <DialogTitle
          sx={{
            p: { xs: 2.5, md: 3 },
            background:
              "linear-gradient(135deg, #2E7D32 0%, #43A047 60%, #B9E6C0 100%)",
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "22px", md: "28px" },
              lineHeight: 1.15,
              fontWeight: 950,
            }}
          >
            {selectedSchool?.name}
          </Typography>
          <Typography sx={{ mt: 1, color: "rgba(255,255,255,0.86)" }}>
            {t("schools.readReviews")}
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ p: { xs: 2, md: 3 }, backgroundColor: "#FBFEFC" }}>
          <Stack spacing={2.5}>
            <Box
              sx={{
                p: 2,
                borderRadius: "18px",
                backgroundColor: "#F1F8E9",
                border: "1px solid rgba(46, 125, 50, 0.14)",
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1}
                alignItems={{ xs: "flex-start", sm: "center" }}
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#245d31",
                      fontSize: "13px",
                      fontWeight: 800,
                      textTransform: "uppercase",
                    }}
                  >
                    {t("schools.reviews")}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#245d31",
                      fontSize: "30px",
                      lineHeight: 1,
                      fontWeight: 950,
                    }}
                  >
                    {selectedSchoolReviews.length}
                  </Typography>
                </Box>

                {selectedSchoolReviews.length >= 5 ? (
                  <Stack alignItems={{ xs: "flex-start", sm: "flex-end" }}>
                    <Typography
                      sx={{
                        color: "#245d31",
                        fontSize: "24px",
                        fontWeight: 950,
                      }}
                    >
                      {getAverageRating(selectedSchoolReviews).toFixed(1)}
                    </Typography>
                    <Rating
                      value={getAverageRating(selectedSchoolReviews)}
                      precision={0.1}
                      readOnly
                      size="small"
                    />
                  </Stack>
                ) : (
                  <Typography
                    sx={{
                      maxWidth: 260,
                      color: "#617061",
                      fontSize: "14px",
                      fontWeight: 700,
                    }}
                  >
                    {t("schools.noReviews")}
                  </Typography>
                )}
              </Stack>
            </Box>

            {selectedSchoolReviews.length ? (
              <Stack spacing={1.5}>
                {selectedSchoolReviews.map((review) => (
                  <Box
                    key={review.id}
                    sx={{
                      p: 2,
                      borderRadius: "16px",
                      backgroundColor: "#fff",
                      border: "1px solid rgba(46, 125, 50, 0.12)",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography sx={{ color: "#245d31", fontWeight: 900 }}>
                        {review.author}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#2E7D32",
                          fontSize: "14px",
                          fontWeight: 900,
                        }}
                      >
                        {Number(review.rating).toFixed(1)} ⭐
                      </Typography>
                    </Stack>
                    <Typography sx={{ mt: 1, color: "#3d4b40", lineHeight: 1.55 }}>
                      {review.comment}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            ) : (
              <Box
                sx={{
                  p: 3,
                  borderRadius: "18px",
                  textAlign: "center",
                  backgroundColor: "#fff",
                  border: "1px dashed rgba(46, 125, 50, 0.28)",
                }}
              >
                <Typography
                  sx={{ color: "#245d31", fontSize: "18px", fontWeight: 900 }}
                >
                  {t("schools.noReviews")}
                </Typography>
                <Typography sx={{ mt: 0.75, color: "#617061" }}>
                  {t("schools.writeReview")}
                </Typography>
              </Box>
            )}

            <Divider />

            <Box
              component="form"
              onSubmit={handleSubmitReview}
              sx={{
                p: { xs: 2, md: 2.5 },
                borderRadius: "20px",
                backgroundColor: "#fff",
                border: "1px solid rgba(46, 125, 50, 0.14)",
              }}
            >
              <Typography
                sx={{
                  mb: 2,
                  fontSize: "20px",
                  fontWeight: 950,
                  color: "#2E7D32",
                }}
              >
                {t("schools.writeReview")}
              </Typography>
              {submitSuccess && (
                <Box
                  sx={{
                    mb: 2,
                    p: 1.5,
                    borderRadius: "14px",
                    backgroundColor: "#E8F5E9",
                    color: "#245d31",
                    fontWeight: 800,
                  }}
                >
                  {t("schools.reviewPendingApproval")}
                </Box>
              )}
              {reviewsError && (
                <Box
                  sx={{
                    mb: 2,
                    p: 1.5,
                    borderRadius: "14px",
                    backgroundColor: "#FFF8E1",
                    color: "#6F4E00",
                    fontWeight: 800,
                  }}
                >
                  {reviewsError}
                </Box>
              )}
              <Stack spacing={2}>
                <TextField
                  label={t("schools.yourName")}
                  value={reviewForm.author}
                  onChange={(event) =>
                    setReviewForm((currentForm) => ({
                      ...currentForm,
                      author: event.target.value,
                    }))
                  }
                  size="small"
                  fullWidth
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
                <Box>
                  <Typography sx={{ mb: 0.75, color: "#617061", fontWeight: 800 }}>
                    {t("schools.yourRating")}
                  </Typography>
                  <Rating
                    value={reviewForm.rating}
                    size="large"
                    onChange={(_, value) =>
                      setReviewForm((currentForm) => ({
                        ...currentForm,
                        rating: value || 0,
                      }))
                    }
                  />
                </Box>
                <TextField
                  label={t("schools.yourReview")}
                  value={reviewForm.comment}
                  onChange={(event) =>
                    setReviewForm((currentForm) => ({
                      ...currentForm,
                      comment: event.target.value,
                    }))
                  }
                  multiline
                  minRows={3}
                  fullWidth
                  required
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "14px",
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="success"
                  disabled={
                    submittingReview ||
                    !reviewForm.rating ||
                    !reviewForm.comment.trim()
                  }
                  sx={{
                    alignSelf: "flex-start",
                    borderRadius: "999px",
                    px: 3,
                    py: 1,
                    textTransform: "none",
                    fontWeight: 900,
                    boxShadow: "0 12px 24px rgba(46, 125, 50, 0.2)",
                  }}
                >
                  {submittingReview
                    ? t("schools.submittingReview")
                    : t("schools.submitReview")}
                </Button>
              </Stack>
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2, backgroundColor: "#FBFEFC" }}>
          <Button
            onClick={handleCloseReviews}
            color="success"
            sx={{ borderRadius: "999px", fontWeight: 900, textTransform: "none" }}
          >
            {t("common.cancel")}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Schools;
