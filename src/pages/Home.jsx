import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import { motion } from "framer-motion";

import HomeSchools from "../components/layout/home/HomeSchools";
import HomeEnrollment from "../components/layout/home/HomeEnrollment";
import HomeSchoolInfo from "../components/layout/home/HomeSchoolInfo";
import HomeFinPlus from "../components/layout/home/HomeFinPlus";
import codingVideo from "../assets/videos/coding.mp4";

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
  return (
    <Box sx={{ background: "#f8fafc" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, md: 6 }}>
          {/* HERO */}
          <Grid item xs={12} textAlign="center" mt={{ xs: 3, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                borderRadius: { xs: "22px", md: "32px" },
                overflow: "hidden",
                py: { xs: 4, md: 7 },
                px: { xs: 2.5, md: 5 },
                maxWidth: "1100px",
                mx: "auto",
                textAlign: "left",
                boxShadow: "0 24px 70px rgba(41, 130, 64, 0.22)",
                background:
                  "linear-gradient(135deg, rgb(39, 154, 74) 0%, rgb(68, 182, 88) 54%, rgb(190, 231, 199) 100%)",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 8% 12%, rgba(255,255,255,0.34), transparent 28%), radial-gradient(circle at 78% 84%, rgba(108,99,255,0.18), transparent 32%)",
                  pointerEvents: "none",
                }}
              />

              <Grid
                container
                spacing={{ xs: 4, md: 6 }}
                alignItems="center"
                sx={{ position: "relative", zIndex: 2 }}
              >
                <Grid item xs={12} md={7} sx={{ textAlign: "center" }}>
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={1}
                  >
                    <Typography
                      sx={{
                        fontSize: { xs: "36px", sm: "48px", md: "68px" },
                        fontFamily: '"Playwrite", "Roboto", sans-serif',
                        fontWeight: 900,
                        lineHeight: 1.25,
                        color: "white",
                        maxWidth: "760px",
                        mx: "auto",
                        textShadow: "0 2px 0 rgba(255,255,255,0.16)",
                      }}
                    >
                      Programare pentru copii 7-16 ani
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
                        mt: 2.5,
                        fontSize: { xs: "16px", md: "20px" },
                        lineHeight: 1.6,
                        color: "rgba(255,255,255,0.92)",
                        maxWidth: "680px",
                        mx: "auto",
                      }}
                    >
                      Sprijin copiii în participarea la hackathoane, concursuri,
                      granturi și programe educaționale (Maib, Tekwill,
                      Yep!Moldova etc.).
                    </Typography>

                    <Box
                      sx={{
                        mt: 3,
                        maxWidth: "660px",
                        mx: "auto",
                        p: { xs: 1.4, sm: 1.6 },
                        borderRadius: "22px",
                        background: "rgba(255,255,255,0.16)",
                        border: "1px solid rgba(255,255,255,0.28)",
                        boxShadow: "0 16px 36px rgba(13, 73, 31, 0.18)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Typography
                        sx={{
                          mb: 1.2,
                          color: "rgba(255,255,255,0.9)",
                          fontSize: { xs: "13px", md: "15px" },
                          fontWeight: 900,
                          textAlign: "center",
                        }}
                      >
                        Pentru înregistrare, sună sau scrie-ne direct
                      </Typography>

                      <Box
                        sx={{
                          display: "grid",
                          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                          gap: 1,
                        }}
                      >
                        <Box
                          component="a"
                          href="tel:069170185"
                          sx={{
                            px: 2,
                            py: 1.2,
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.92)",
                            color: "#2e7d32",
                            fontWeight: 950,
                            textDecoration: "none",
                            textAlign: "center",
                            boxShadow: "0 10px 22px rgba(0,0,0,0.12)",
                          }}
                        >
                          Telefon: 069170185
                        </Box>
                        <Box
                          component="a"
                          href="https://www.instagram.com/escoala.md/"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            px: 2,
                            py: 1.2,
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.18)",
                            color: "white",
                            fontWeight: 950,
                            textDecoration: "none",
                            textAlign: "center",
                            border: "1px solid rgba(255,255,255,0.3)",
                          }}
                        >
                          Instagram: @escoala.md
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>

                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={3}
                  >
                    <Box
                      sx={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                        gap: { xs: 0.8, sm: 1.2 },
                        mt: 3,
                      }}
                    >
                      {[
                        "Pentru copii curioși",
                        "Clar pentru părinți",
                        "Primul proiect rapid",
                      ].map((text) => (
                        <Box
                          key={text}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            minHeight: { xs: 48, sm: 50 },
                            px: { xs: 0.8, sm: 1.6 },
                            py: { xs: 0.8, sm: 1 },
                            borderRadius: "999px",
                            background: "rgba(255,255,255,0.16)",
                            color: "white",
                            fontSize: { xs: "11px", sm: "13px", md: "14px" },
                            fontWeight: 800,
                            lineHeight: 1.15,
                            textAlign: "center",
                            border: "1px solid rgba(255,255,255,0.22)",
                          }}
                        >
                          {text}
                        </Box>
                      ))}
                    </Box>

                    <Box mt={4} sx={{ textAlign: "center" }}>
                      <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLSdqe_hr9Cnbq-e4Lh3IJWrwkta2PyldrNyPl2pc-2ZUeJHb4Q/viewform?usp=preview"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <Box
                          sx={{
                            display: "inline-block",
                            minWidth: { xs: "240px", sm: "280px" },
                            px: { xs: 5, md: 6 },
                            py: { xs: 1.8, md: 2 },
                            borderRadius: "999px",
                            fontWeight: 900,
                            fontSize: { xs: "18px", md: "20px" },
                            background: "white",
                            color: "#2e7d32",
                            boxShadow: "0 14px 30px rgba(0,0,0,0.18)",
                            transition: "0.2s ease",
                            "&:hover": {
                              transform: "translateY(-2px)",
                              boxShadow: "0 18px 36px rgba(0,0,0,0.22)",
                            },
                          }}
                        >
                          Începe gratuit
                        </Box>
                      </a>
                    </Box>
                  </motion.div>
                </Grid>

                <Grid item xs={12} md={5}>
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="show"
                    custom={4}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        borderRadius: { xs: "20px", md: "26px" },
                        overflow: "hidden",
                        aspectRatio: "4 / 5",
                        minHeight: { xs: 300, sm: 360, md: 430 },
                        background: "rgba(255,255,255,0.2)",
                        boxShadow: "0 24px 50px rgba(13, 73, 31, 0.28)",
                        border: "1px solid rgba(255,255,255,0.28)",
                      }}
                    >
                      <Box
                        component="video"
                        src={codingVideo}
                        autoPlay
                        muted
                        loop
                        playsInline
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, transparent 45%, rgba(21, 95, 43, 0.62) 100%)",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          left: 18,
                          right: 18,
                          bottom: 18,
                          p: 2,
                          borderRadius: "18px",
                          background: "rgba(255,255,255,0.9)",
                          color: "#1f5f31",
                        }}
                      >
                        <Typography sx={{ fontWeight: 900, fontSize: "16px" }}>
                          Copiii învață făcând
                        </Typography>
                        <Typography sx={{ mt: 0.5, fontSize: "13px" }}>
                          Jocuri, pagini web și idei pe care le pot arăta cu
                          mândrie.
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* RESTUL SECȚIUNILOR */}
          <Grid item xs={12}>
            <HomeEnrollment />
          </Grid>

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
