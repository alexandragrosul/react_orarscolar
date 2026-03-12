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
// import HomeCourses from "../components/layout/home/HomeCourses";
import HomeFinPlus from "../components/layout/home/HomeFinPlus";

function Home({ profesors }) {
  const { t } = useTranslation();
  

  return (
    <>
      <Container
        sx={{
          background: "#59a96a", // Основной зеленый цвет
          borderTopRightRadius: "50px",
          borderTopLeftRadius: "50px",
          padding: "60px 20px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container>
          {/* Header Section */}
          <Grid item xs={12} sx={{ textAlign: "center", color: "#fff" }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "bold",
                fontFamily: "'Roboto', sans-serif",
                fontSize: {
                  xs: "30px", // Маленький шрифт для мобильных устройств
                  md: "60px", // Крупный шрифт для компьютеров
                },
                textShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}
            >
              {t("home.slogan")}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 300,
                fontSize: {
                  xs: "16px", // Маленький шрифт для мобильных устройств
                  md: "22px", // Крупный шрифт для компьютеров
                },
                color: "#f4f4f4",
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: 1.5,
              }}
              align="center"
            ></Typography>
          </Grid>

          {/* Hero block (official enrollment) */}
          <Grid
            item
            xs={12}
            sx={{
              marginTop: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Card sx={{ width: "100%", maxWidth: 1100, bgcolor: "#2e7d32", color: "#fff" }}>
              <CardContent sx={{ padding: { xs: 3, md: 6 } }}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: "bold", mb: 2 }}>
                  Căutați platforma oficială de înscriere în școlile din Chișinău?
                </Typography>
                <Typography sx={{ mb: 3 }}>
                  Dacă ați ajuns aici din greșeală, platforma oficială de înscriere este disponibilă aici:
                </Typography>
                <Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    href="https://escoala.chisinau.md/"
                    target="_blank"
                    sx={{ bgcolor: "#fff", color: "#2e7d32", fontWeight: "bold", fontSize: 16 }}
                  >
                    👉 Accesează platforma oficială de înscriere
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Informational + Guide block */}
          <Grid item xs={12} sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}>
            <Card sx={{ width: "100%", maxWidth: 1100 }}>
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
                  Între timp, am pregătit un ghid util pentru părinți
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Știm că perioada înscrierii la școală poate fi stresantă. De aceea am pregătit un ghid gratuit pentru părinți:
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Lista documentelor necesare" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Întrebări importante pentru administrația școlii" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Cum pregătim copilul emoțional pentru prima zi" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckCircleIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Semne că adaptarea la școală este dificilă" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Email form block */}
          <Grid item xs={12} sx={{ marginTop: 4, display: "flex", justifyContent: "center" }}>
            <Card sx={{ width: "100%", maxWidth: 1100 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  Primește gratuit ghidul pentru părinți
                </Typography>
                <Typography sx={{ mb: 2, color: "text.secondary" }}>
                  Introdu adresa de email și îți trimitem ghidul în format PDF.
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Box sx={{ width: "100%", maxWidth: 700, height: { xs: 600, md: 800 } }}>
                    <iframe
                      title="Ghid părinți - Escoala"
                      src="https://forms.gle/uYeHgxVj4QDJfrxf7"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      style={{ border: 0 }}
                    >
                      Loading…
                    </iframe>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Short initiative block + HomeHero intro */}
          <Grid item xs={12} sx={{ marginTop: 4, display: "flex", justifyContent: "center", gap: 2, flexDirection: "column" }}>
            <Card sx={{ width: "100%", maxWidth: 1100 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Despre Escoala.md
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Escoala.md este o inițiativă educațională creată pentru a sprijini părinții și școlile în construirea unui mediu educațional sigur și sănătos. Dezvoltăm instrumente digitale pentru a susține bunăstarea emoțională a copiilor.
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                  Pentru părinții care doresc monitorizare emoțională zilnică
                </Typography>
                <Typography sx={{ mb: 2 }}>
                  Am dezvoltat și HomeHero – un instrument digital care ajută părinții să înțeleagă mai bine starea emoțională a copilului și să identifice din timp semnale de stres sau dificultăți școlare.
                </Typography>
                <Box>
                  <Button component={Link} href="https://homehero.info/" variant="outlined" size="small">
                    Află mai multe despre HomeHero
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Schools Section */}
          <Grid
            item
            xs={12}
            sx={{
              background: "#f1f8e9",
              borderRadius: "20px",
              padding: "40px",
            }}
          >
            <HomeSchools />
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              background: "#f1f8e9",
              borderRadius: "20px",
              padding: "40px",
              marginTop: "40px",
            }}
          >
            <HomeFinPlus />
          </Grid>

          {/* School Info Section */}

          <Grid
            item
            xs={12}
            sx={{
              background: "#e8f5e9", // Светлый зеленый для фонового блока
              borderRadius: "20px",
              padding: "40px",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
              marginTop: "40px",
            }}
          >
            <HomeSchoolInfo />
          </Grid>

          {/* Courses Section */}
          {/* <Grid
            item
            xs={12}
            sx={{
              background: "#81c784", // Более яркий зеленый для секции курсов
              borderRadius: "20px",
              padding: "40px",
              marginTop: "40px",
              color: "#fff",
            }}
          >
            <HomeCourses />
          </Grid> */}
        </Grid>
      </Container>
    </>
  );
}

export default Home;
