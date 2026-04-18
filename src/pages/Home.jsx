import React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

import HomeSchools from "../components/layout/home/HomeSchools";
import HomeSchoolInfo from "../components/layout/home/HomeSchoolInfo";
import HomeFinPlus from "../components/layout/home/HomeFinPlus";
import HomeWebinar from "../components/layout/home/HomeWebinar";

import { useTranslation } from "react-i18next";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

function Home() {
  const { t } = useTranslation();

  return (
    <Box sx={{ background: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {/* HERO */}
          <Grid item xs={12} textAlign="center" mt={{ xs: 3, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "28px",
                overflow: "hidden",
                py: { xs: 6, md: 12 },
                px: { xs: 3, md: 6 },
                maxWidth: "1100px",
                mx: "auto",
                boxShadow: "0 20px 60px rgba(108,99,255,0.25)",
                background:
                  "linear-gradient(135deg,rgb(176, 212, 182),rgb(58, 169, 73))",
              }}
            >
              <Box sx={{ position: "relative", zIndex: 2 }}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={1}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "28px", sm: "40px", md: "64px" },
                      fontWeight: 900,
                      lineHeight: 1.1,
                      color: "white",
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    {t("home.slogan")}
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={2}
                >
                  <Typography
                    sx={{
                      mt: 2,
                      fontSize: { xs: "14px", md: "18px" },
                      color: "rgba(255,255,255,0.9)",
                      px: { xs: 1, md: 0 },
                    }}
                  >
                    Ghid +{" "}
                    <Box
                      component="span"
                      sx={{
                        color: "#6d63ff",
                        fontWeight: 700,
                      }}
                    >
                      webinare gratuite
                    </Box>{" "}
                    pentru copii 7-15 ani, care vor să învețe programare de la
                    zero.
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={3}
                >
                  <Box mt={4}>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeAiJnkUTtGSzEH6HP15yQTWPtB59uEEEAaQYcnGepu-xGvRA/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        sx={{
                          display: "inline-block",
                          px: 4,
                          py: 1.5,
                          borderRadius: "999px",
                          fontWeight: 700,
                          fontSize: "15px",
                          background: "white",
                          color: "#2e7d32",
                          boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                        }}
                      >
                        Începe gratuit
                      </Box>
                    </a>
                  </Box>
                </motion.div>
              </Box>
            </Box>
          </Grid>

          {/* WEBINAR */}
          <Grid item xs={12}>
            <Box
              sx={{
                borderRadius: "20px",
                p: { xs: 2, md: 6 },
                background: "#fff",
                boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
              }}
            >
              <HomeWebinar />
            </Box>
          </Grid>

          {/* GHID */}
          <Grid item xs={12}>
            <Box
              sx={{
                borderRadius: "24px",
                p: { xs: 2, md: 6 },
                textAlign: "center",
                background: "#fff",
                boxShadow: "0 15px 50px rgba(0,0,0,0.06)",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "22px", md: "36px" },
                  fontWeight: 800,
                }}
              >
                Primește ghidul gratuit
              </Typography>

              <Typography sx={{ mt: 1, color: "#666", fontSize: "14px" }}>
                Tot ce trebuie să știi pentru înscriere
              </Typography>

              <Box mt={3}>
                <iframe
                  title="Ghid"
                  src="https://forms.gle/uYeHgxVj4QDJfrxf7"
                  width="100%"
                  height="420"
                  style={{ border: "none", borderRadius: "16px" }}
                />
              </Box>
            </Box>
          </Grid>

          {/* RESTUL SECȚIUNILOR */}
          <Grid item xs={12}>
            <HomeSchools />
          </Grid>

          <Grid item xs={12}>
            <HomeFinPlus />
          </Grid>

          <Grid item xs={12} mb={4}>
            <HomeSchoolInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
