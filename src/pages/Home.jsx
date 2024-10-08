import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import HomeSchools from "../components/layout/home/HomeSchools";
import { useTranslation } from "react-i18next";
import HomeSchoolInfo from "../components/layout/home/HomeSchoolInfo";
import HomeCourses from "../components/layout/home/HomeCourses";

function Home({ profesors }) {
  const { t } = useTranslation();
  return (
    <>
      <Container
        sx={{
          background: "linear-gradient(180deg, #d7e8d2, #59a96a)",
          borderTopRightRadius: "50px",
          borderTopLeftRadius: "50px",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{ background: "transparent", mb: 4, p: 2, mt: 4 }}
          >
            <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{
                mt: 1,
                fontWeight: "bold",
                font: "Noto Sans Vithkuqi",
                fontSize: {
                  xs: "x-large", // x-large font size on extra-small screens (mobile)
                  md: "xxx-large", // default font size on medium and larger screens
                },
              }}
            >
              {t("home.slogan")}
            </Typography>
          </Grid>
          <Grid item>
            <HomeSchools />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ background: "white", borderRadius: "50px", p: 2 }}
          >
            <HomeSchoolInfo />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ background: "white", borderRadius: "50px", p: 2, mt: 4 }}
          >
            <HomeCourses />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Home;
