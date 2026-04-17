import React from "react";
import { Container, Typography, Grid, Button, Box } from "@mui/material";
import { motion } from "framer-motion";

import HomeSchools from "../components/layout/home/HomeSchools";
import HomeSchoolInfo from "../components/layout/home/HomeSchoolInfo";
import HomeFinPlus from "../components/layout/home/HomeFinPlus";
import HomeWebinar from "../components/layout/home/HomeWebinar";

import { useTranslation } from "react-i18next";
import RoundButton from "../components/layout/RoundButton";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

function Home() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        background: "#f8fafc", // alb premium, nu gradient ieftin
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* 🔥 HERO */}
          <Grid item xs={12} textAlign="center" mt={6} mb={4}>
            <Box
              sx={{
                position: "relative",
                borderRadius: "32px",
                overflow: "hidden",
                py: { xs: 8, md: 12 },
                px: 2,
                maxWidth: "1100px",
                margin: "0 auto",
                boxShadow: "0 30px 80px rgba(108,99,255,0.35)",
                background:
                  "linear-gradient(135deg,rgb(176, 212, 182) 0%,rgb(58, 169, 73) 50%,rgb(120, 211, 129) 100%)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: "400px",
                  height: "400px",
                  background: "rgba(255,255,255,0.2)",
                  filter: "blur(120px)",
                  top: "-100px",
                  left: "-100px",
                },
              }}
            >
              {/* 🔥 blur overlay */}
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  backdropFilter: "blur(40px)",
                  background: "rgba(255,255,255,0.05)",
                }}
              />

              <Box sx={{ position: "relative", zIndex: 2 }}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={1}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "34px", md: "64px" },
                      fontWeight: 900,
                      lineHeight: 1.1,
                      letterSpacing: "-1.5px",
                      color: "white",
                      maxWidth: "900px",
                      margin: "0 auto",
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
                      mt: 3,
                      fontSize: "20px",
                      color: "rgba(255,255,255,0.9)",
                      maxWidth: "600px",
                      margin: "0 auto",
                    }}
                  >
                    Ghid complet +{" "}
                    <Box
                      component="span"
                      sx={{
                        color: "#FFD66B",
                        fontWeight: 700,
                      }}
                    >
                      webinare gratuite
                    </Box>{" "}
                    pentru părinți
                  </Typography>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="show"
                  custom={3}
                >
                  <Box mt={5}>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeAiJnkUTtGSzEH6HP15yQTWPtB59uEEEAaQYcnGepu-xGvRA/viewform?usp=header"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <Box
                        sx={{
                          display: "inline-block",
                          px: 5,
                          py: 2,
                          borderRadius: "999px",
                          fontWeight: 700,
                          fontSize: "16px",
                          background: "white",
                          color: "#6C63FF",
                          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            transform: "translateY(-3px) scale(1.03)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
                          },
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

          {/* 🔥 WEBINAR */}
          <Grid item xs={12}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
            >
              <Box
                sx={{
                  borderRadius: "24px",
                  p: { xs: 3, md: 6 },
                  background: "#ffffff",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
                }}
              >
                <HomeWebinar />
              </Box>
            </motion.div>
          </Grid>

          {/* 🔥 GHID (PREMIUM VERSION) */}
          <Grid item xs={12}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
            >
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "32px",
                  p: { xs: 3, md: 6 },
                  textAlign: "center",
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 30px 80px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  overflow: "hidden",
                }}
              >
                {/* glow effect */}
                <Box
                  sx={{
                    position: "absolute",
                    width: "500px",
                    height: "500px",
                    background:
                      "radial-gradient(circle, rgba(108,99,255,0.25), transparent 60%)",
                    top: "-200px",
                    right: "-200px",
                    filter: "blur(40px)",
                  }}
                />

                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: "26px", md: "36px" },
                      fontWeight: 800,
                      color: "#1a1a1a",
                    }}
                  >
                    Primește ghidul gratuit
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      color: "#555",
                      fontSize: "16px",
                    }}
                  >
                    Tot ce trebuie să știi pentru înscriere
                  </Typography>

                  <Box
                    mt={4}
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                      border: "1px solid rgba(0,0,0,0.05)",
                      background: "white",
                    }}
                  >
                    <iframe
                      title="Ghid părinți"
                      src="https://forms.gle/uYeHgxVj4QDJfrxf7"
                      width="100%"
                      height="520"
                      style={{
                        border: "none",
                        display: "block",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Grid>

          {/* 🔥 SCHOOLS */}
          <Grid item xs={12}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={1}
            >
              <HomeSchools />
            </motion.div>
          </Grid>

          {/* 🔥 FIN+ */}
          <Grid item xs={12}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={2}
            >
              <HomeFinPlus />
            </motion.div>
          </Grid>

          {/* 🔥 INFO */}
          <Grid item xs={12} mb={6}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={3}
            >
              <HomeSchoolInfo />
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Home;
