import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import HomeSchools from "../components/layout/home/HomeSchools";
import { useTranslation } from "react-i18next";

function Home({ profesors }) {
  const { t } = useTranslation();
  return (
    <>
      {/* <Box sx={{ background: "#d7e8d2", height: "calc(100vh - 100.5px)" }}> */}
      <Container
        sx={{
          // mt: 1,
          background: "linear-gradient(180deg, #d7e8d2, #59a96a)",
          //   pb: 8,
          borderTopRightRadius: "50px",
          borderTopLeftRadius: "50px",
        }}
      >
        <Grid
          container
          // spacing={4}
          // sx={{
          //   background: "linear-gradient(180deg, #d7e8d2, #59a96a)",
          //   pb: 8,
          //   borderRadius: "50px",
          // }}
        >
          <Grid
            item
            xs={12}
            sx={{ background: "transparent", mb: 4, p: 2, mt: 4 }}
          >
            {/* <HomeQuestion /> */}
            <Typography
              variant="h2"
              component="h1"
              align="center"
              sx={{
                mt: 1,
                fontWeight: "bold",
                font: "Noto Sans Vithkuqi",
              }}
            >
              {t("home.slogan")}
            </Typography>
          </Grid>
          <Grid item>
            <HomeSchools />
          </Grid>

          {/* <Grid item xs={12} sx={{ background: "transparent", mb: 4, p: 2 }}>
            <Typography
              variant="h3"
              component="h2"
              align="left"
              sx={{
                mt: 1,
                fontWeight: "bold",
                font: "Noto Sans Vithkuqi",
              }}
            >
              {t("trustedTutors.title")}
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt: 3 }}>
              {t("trustedTutors.description")}
            </Typography>
          </Grid> */}
          {/* <Grid item xs={12} sx={{ background: "transparent", pt: 2 }}>
            <HomeSchools />
          </Grid> */}
          {/* <Grid
            item
            xs={12}
            sx={{ background: "white", borderRadius: "50px", p: 2 }}
          >
            <HomePsychology />
          </Grid> */}
          {/* <Grid item xs={12} sx={{ background: "transparent", pt: 2 }}>
            <HomeEcology />
          </Grid> */}
          {/* <Grid
            item
            xs={12}
            sx={{ background: "white", borderRadius: "50px", p: 2 }}
          > */}
          {/* <HomeRepetitor /> */}
          {/* </Grid> */}
        </Grid>
      </Container>
      {/* </Box> */}
    </>
  );
}

export default Home;
