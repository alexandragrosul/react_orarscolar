import React from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Link,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HomeSchools from "../components/layout/home/HomeSchools";
import { useTranslation } from "react-i18next";
import HomeSchoolInfo from "../components/layout/home/HomeSchoolInfo";
import HomeFinPlus from "../components/layout/home/HomeFinPlus";

function Home({ profesors }) {
  const { t } = useTranslation();

  const cardStyle = {
    width: "100%",
    maxWidth: 1100,
    borderRadius: "24px",
    textAlign: "center",
    backdropFilter: "blur(10px)",
    background: "rgba(255,255,255,0.95)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
    transition: "all 0.35s ease",
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
    },
  };

  return (
    <Container
      sx={{
        background: "linear-gradient(135deg, #59a96a 0%, #2e7d32 100%)",
        borderTopRightRadius: "50px",
        borderTopLeftRadius: "50px",
        padding: { xs: "40px 15px", md: "80px 30px" },
        boxShadow: "0px 20px 60px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Grid container spacing={4}>
        {/* HEADER */}
        <Grid item xs={12} sx={{ textAlign: "center", color: "#fff" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "32px", md: "60px" },
              textShadow: "0px 8px 30px rgba(0,0,0,0.3)",
            }}
          >
            {t("home.slogan")}
          </Typography>
        </Grid>

        {/* HERO CTA */}
        <Grid item xs={12} display="flex" justifyContent="center">
          <Card sx={cardStyle}>
            <CardContent sx={{ p: { xs: 3, md: 6 } }}>
              <Typography variant="h4" fontWeight="bold" mb={2}>
                Căutați platforma oficială de înscriere în școlile din Chișinău?
              </Typography>

              <Typography mb={3}>
                Dacă ați ajuns aici din greșeală, platforma oficială este aici:
              </Typography>

              <Box display="flex" justifyContent="center">
                <Button
                  variant="contained"
                  href="https://escoala.chisinau.md/"
                  target="_blank"
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    background:
                      "linear-gradient(135deg, #ffffff 0%, #f1f8e9 100%)",
                    color: "#2e7d32",
                    fontWeight: "700",
                    borderRadius: "14px",
                    padding: "12px 26px",
                    border: "1px solid rgba(46,125,50,0.2)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    display: "flex",
                    gap: "10px",

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      left: "-75%",
                      width: "50%",
                      height: "100%",
                      background:
                        "linear-gradient(120deg, transparent, rgba(255,255,255,0.6), transparent)",
                      transform: "skewX(-20deg)",
                    },

                    "&:hover::before": {
                      left: "130%",
                      transition: "0.7s",
                    },

                    "&:hover": {
                      transform: "translateY(-3px) scale(1.03)",
                    },
                  }}
                >
                  🚀 Accesează platforma oficială
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* GUIDE */}
        <Grid item xs={12} display="flex" justifyContent="center">
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                Ghid gratuit pentru părinți
              </Typography>

              <Typography mb={2}>
                Tot ce trebuie să știi pentru înscriere:
              </Typography>

              <List>
                {[
                  "Lista documentelor necesare",
                  "Întrebări pentru școală",
                  "Pregătirea emoțională",
                  "Semne de dificultate",
                ].map((text) => (
                  <ListItem
                    key={text}
                    sx={{
                      justifyContent: "center",
                      borderRadius: "12px",
                      mb: 1,
                      "&:hover": { background: "#f7f7f7" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 30 }}>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>

        {/* FORM */}
        <Grid item xs={12} display="flex" justifyContent="center">
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold" mb={1}>
                Primește ghidul gratuit
              </Typography>

              <Typography mb={3}>
                Introdu emailul și îl primești instant
              </Typography>

              <Box display="flex" justifyContent="center">
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: 750,
                    borderRadius: "20px",
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
                  }}
                >
                  <iframe
                    title="Ghid părinți"
                    src="https://forms.gle/uYeHgxVj4QDJfrxf7"
                    width="100%"
                    height="600"
                    style={{ border: "none" }}
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* ABOUT */}
        <Grid item xs={12} display="flex" justifyContent="center">
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Despre Escoala.md
              </Typography>

              <Typography mb={2}>
                Inițiativă educațională pentru sprijinirea părinților și
                copiilor.
              </Typography>

              <Divider sx={{ my: 2 }} />

              <Typography fontWeight="bold">HomeHero</Typography>

              <Typography mb={2}>
                Monitorizare emoțională zilnică pentru copii.
              </Typography>

              <Button
                component={Link}
                href="https://homehero.info/"
                variant="outlined"
              >
                Află mai multe
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* SECTIONS */}
        <Grid
          item
          xs={12}
          sx={{ borderRadius: "20px", p: 4, background: "#f1f8e9" }}
        >
          <HomeSchools />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ borderRadius: "20px", p: 4, background: "#f1f8e9" }}
        >
          <HomeFinPlus />
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ borderRadius: "20px", p: 4, background: "#e8f5e9" }}
        >
          <HomeSchoolInfo />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
