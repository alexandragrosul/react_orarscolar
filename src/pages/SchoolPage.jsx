import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Chip,
  CircularProgress,
  Collapse,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import SchoolIcon from "@mui/icons-material/School";
import SendIcon from "@mui/icons-material/Send";
import { schoolImages } from "../utils/schoolImages";
import { schoolsData } from "../utils/schoolsData";

const SCHOOL_FALLBACK_IMAGE = "/images/schools/generated-school-fallback.png";

const getSchoolImageCandidates = (school) => [
  schoolImages[String(school?.id)],
  `/images/schools/${school?.id}.png`,
  `/images/schools/${school?.id}.jpg`,
  `/images/schools/${school?.id}.jpeg`,
  `/images/schools/${school?.id}.webp`,
  school?.image,
  SCHOOL_FALLBACK_IMAGE,
];

const parseServiceAddresses = (school) => {
  if (Array.isArray(school?.serviceAdress)) {
    return school.serviceAdress;
  }

  if (!school?.service_address) {
    return [];
  }

  try {
    return JSON.parse(school.service_address);
  } catch {
    return [];
  }
};

const formatMetric = (value, fallback = "0") => {
  if (value === null || value === undefined || value === "") {
    return fallback;
  }

  return value;
};

const SchoolHeroImage = ({ school }) => {
  const imageCandidates = useMemo(
    () => getSchoolImageCandidates(school).filter(Boolean),
    [school]
  );
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    setImageIndex(0);
  }, [school?.id]);

  return (
    <Box
      component="img"
      src={imageCandidates[imageIndex]}
      alt={school?.name}
      onError={() => {
        setImageIndex((currentIndex) =>
          Math.min(currentIndex + 1, imageCandidates.length - 1)
        );
      }}
      sx={{
        width: "100%",
        height: { xs: 230, sm: 330, md: 470 },
        objectFit: "cover",
        display: "block",
      }}
    />
  );
};

const SchoolPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [school, setSchool] = useState(() =>
    schoolsData.find((schoolItem) => String(schoolItem.id) === String(id))
  );
  const [openDistricts, setOpenDistricts] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchSchoolData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        `https://api.escoala.md/api/schools/${id}`
      );

      if (response.data?.data) {
        setSchool(response.data.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    setSchool(schoolsData.find((schoolItem) => String(schoolItem.id) === id));
    fetchSchoolData();
  }, [fetchSchoolData, id]);

  const serviceAddresses = useMemo(() => parseServiceAddresses(school), [school]);
  const schoolAddress = school?.schoolAdress || school?.address;

  if (loading && !school) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "linear-gradient(135deg, #EAFBEA, #F8FFFA)",
        }}
      >
        <CircularProgress size={60} thickness={4} color="success" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #e9f8ec 0%, #f7fbf8 45%, #ffffff 100%)",
        py: { xs: 2, md: 5 },
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 1.25, sm: 3 } }}>
        <Breadcrumbs
          sx={{
            mb: { xs: 2, md: 3 },
            "& .MuiBreadcrumbs-ol": {
              alignItems: "center",
              rowGap: 0.5,
            },
          }}
        >
          <Link
            to="/schools"
            style={{
              textDecoration: "none",
              color: "#2E7D32",
              fontWeight: 800,
            }}
          >
            {t("schoolPage.backToSchools")}
          </Link>
          <Typography sx={{ color: "#617061" }}>{school?.name}</Typography>
        </Breadcrumbs>

        <Card
          sx={{
            borderRadius: { xs: "16px", md: "26px" },
            overflow: "hidden",
            boxShadow: {
              xs: "0 14px 34px rgba(34, 105, 50, 0.14)",
              md: "0 24px 70px rgba(34, 105, 50, 0.18)",
            },
            border: "1px solid rgba(46, 125, 50, 0.1)",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <SchoolHeroImage school={school} />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(13, 58, 25, 0.02) 15%, rgba(13, 58, 25, 0.72) 100%)",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                left: { xs: 16, md: 38 },
                right: { xs: 16, md: 38 },
                bottom: { xs: 16, md: 34 },
                color: "#fff",
              }}
            >
              <Chip
                icon={<SchoolIcon />}
                label={school?.sector || t("schoolPage.school")}
                sx={{
                  mb: { xs: 1.25, md: 2 },
                  backgroundColor: "rgba(255,255,255,0.92)",
                  color: "#2E7D32",
                  fontWeight: 900,
                  maxWidth: "100%",
                }}
              />
              <Typography
                variant="h2"
                sx={{
                  maxWidth: "920px",
                  fontSize: { xs: "28px", sm: "42px", md: "58px" },
                  lineHeight: { xs: 1.12, md: 1.08 },
                  fontWeight: 950,
                  textShadow: "0 4px 24px rgba(0,0,0,0.35)",
                  overflowWrap: "anywhere",
                }}
              >
                {school?.name}
              </Typography>
            </Box>
          </Box>

          <CardContent sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
            <Grid container spacing={{ xs: 2, md: 2.5 }}>
              <Grid item xs={12} md={7}>
                <Stack spacing={{ xs: 1.5, md: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "#245d31",
                      fontWeight: 900,
                      fontSize: { xs: "28px", md: "32px" },
                    }}
                  >
                    {t("schoolPage.overview")}
                  </Typography>

                  <Grid container spacing={{ xs: 1.25, md: 1.5 }}>
                    <Grid item xs={12} sm={6}>
                      <InfoPanel
                        icon={<PhoneIcon color="success" />}
                        label={t("schoolPage.phone")}
                        value={school?.phone || t("schoolPage.phoneMissing")}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <InfoPanel
                        icon={<LocationOnIcon color="success" />}
                        label={t("schoolPage.address")}
                        value={schoolAddress || t("schoolPage.noData")}
                      />
                    </Grid>
                  </Grid>

                  <Grid container spacing={{ xs: 1, sm: 1.5 }}>
                    <Grid item xs={4}>
                      <MetricPanel
                        label={t("schoolPage.freePlaces")}
                        value={formatMetric(school?.freePlaces)}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <MetricPanel
                        label={t("schoolPage.lyceumPlaces")}
                        value={formatMetric(school?.freePlacesLyceum)}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <MetricPanel
                        label={t("schoolPage.requests")}
                        value={formatMetric(school?.requestsSent)}
                      />
                    </Grid>
                  </Grid>

                  <Box>
                    <Button
                      component="a"
                      href="https://escoala.chisinau.md/"
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="contained"
                      color="success"
                      startIcon={<SendIcon />}
                      sx={{
                        mt: 0.5,
                        borderRadius: "999px",
                        px: { xs: 2.25, md: 3 },
                        py: { xs: 1, md: 1.2 },
                        textTransform: "none",
                        fontWeight: 900,
                        fontSize: { xs: "15px", md: "16px" },
                        boxShadow: "0 14px 30px rgba(46, 125, 50, 0.22)",
                      }}
                    >
                      {t("schoolPage.enrollment")}
                    </Button>
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={12} md={5}>
                <Box
                  sx={{
                    height: "100%",
                    p: { xs: 1.75, md: 2.5 },
                    borderRadius: { xs: "16px", md: "18px" },
                    backgroundColor: "#F1F8E9",
                    border: "1px solid rgba(46, 125, 50, 0.12)",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#245d31",
                      fontWeight: 900,
                      mb: 0.75,
                      fontSize: { xs: "18px", md: "20px" },
                    }}
                  >
                    {t("schoolPage.districtTitle")}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#617061",
                      mb: 1.5,
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    {t("schoolPage.districtDescription")}
                  </Typography>

                  <Button
                    fullWidth
                    onClick={() => setOpenDistricts((current) => !current)}
                    endIcon={openDistricts ? <ExpandLess /> : <ExpandMore />}
                    sx={{
                      justifyContent: "space-between",
                      textTransform: "none",
                      color: "#2E7D32",
                      fontWeight: 900,
                      backgroundColor: "#fff",
                      borderRadius: "14px",
                      px: 2,
                      py: { xs: 1, md: 1.2 },
                    }}
                  >
                    {openDistricts
                      ? t("schoolPage.hideDistricts")
                      : t("schoolPage.showDistricts")}
                  </Button>

                  <Collapse in={openDistricts} timeout="auto">
                    <List sx={{ mt: 1.5 }}>
                      {serviceAddresses.length ? (
                        serviceAddresses.map((address, index) => (
                          <ListItem
                            key={`${address}-${index}`}
                            sx={{
                              px: 0,
                              py: { xs: 1, md: 1.25 },
                              alignItems: "flex-start",
                              borderBottom: "1px solid rgba(46,125,50,0.12)",
                            }}
                          >
                            <ListItemIcon sx={{ minWidth: 34, pt: 0.5 }}>
                              <BusinessIcon color="success" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={address} />
                          </ListItem>
                        ))
                      ) : (
                        <Typography sx={{ color: "#617061", py: 2 }}>
                          {t("schoolPage.noData")}
                        </Typography>
                      )}
                    </List>
                  </Collapse>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>

    </Box>
  );
};

const InfoPanel = ({ icon, label, value }) => (
  <Box
    sx={{
      minHeight: { xs: 88, md: 118 },
      p: { xs: 1.5, md: 1.75 },
      borderRadius: { xs: "14px", md: "16px" },
      backgroundColor: "#F8FCF8",
      border: "1px solid rgba(46, 125, 50, 0.12)",
    }}
  >
    <Stack
      direction="row"
      spacing={1.25}
      alignItems="center"
      sx={{
        height: "100%",
        "& .MuiSvgIcon-root": {
          fontSize: { xs: 25, md: 30 },
        },
      }}
    >
      {icon}
      <Box>
        <Typography sx={{ color: "#617061", fontSize: "13px", fontWeight: 800 }}>
          {label}
        </Typography>
        <Typography
          sx={{
            color: "#1f3d26",
            fontWeight: 900,
            fontSize: { xs: "16px", md: "15px" },
            lineHeight: 1.25,
            overflowWrap: "anywhere",
          }}
        >
          {value}
        </Typography>
      </Box>
    </Stack>
  </Box>
);

const MetricPanel = ({ label, value }) => (
  <Box
    sx={{
      minHeight: { xs: 78, md: 112 },
      p: { xs: 1, md: 1.6 },
      borderRadius: { xs: "14px", md: "16px" },
      background: "linear-gradient(135deg, #E8F5E9, #FFFFFF)",
      border: "1px solid rgba(46, 125, 50, 0.12)",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    }}
  >
    <Typography
      sx={{
        color: "#2E7D32",
        fontSize: { xs: "22px", md: "24px" },
        lineHeight: 1,
        fontWeight: 950,
      }}
    >
      {value}
    </Typography>
    <Typography
      sx={{
        mt: 0.6,
        color: "#617061",
        fontSize: { xs: "11px", md: "13px" },
        lineHeight: 1.15,
        fontWeight: 800,
      }}
    >
      {label}
    </Typography>
  </Box>
);

export default SchoolPage;
