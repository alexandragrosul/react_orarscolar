import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import HomeSchools from "../components/layout/home/HomeSchools";
import { useTranslation } from "react-i18next";
import HomeSchoolInfo from "../components/layout/home/HomeSchoolInfo";
import HomeCourses from "../components/layout/home/HomeCourses";
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
