import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import HomeSearch from "../components/layout/home/HomeRepetitor";
import SchoolsSearch from "../components/school/SchoolsSearch";
import { Link, Stack } from "../../node_modules/@mui/material/index";
import RoundButton from "../components/layout/RoundButton";
import HomeSchools from "../components/layout/home/HomeSchools";
import HomeRepetitor from "../components/layout/home/HomeRepetitor";

function Home({ profesors }) {
  return (
    <>
      {/* <Box sx={{ background: "#d7e8d2", height: "calc(100vh - 100.5px)" }}> */}
      <Container
        sx={{
          mt: 2,
        }}
      >
        <Grid
          container
          spacing={4}
          sx={{
            background: "linear-gradient(180deg, #d7e8d2, #59a96a)",
            pb: 8,
          }}
        >
          <Grid item xs={12} sx={{ background: "transparent", mb: 4 }}>
            <Typography
              variant="h2"
              component="h2"
              align="left"
              sx={{
                marginTop: "65px",
                fontWeight: "bold",
                font: "Noto Sans Vithkuqi",
              }}
            >
              Elevii conduc lumea iar noi îi ajutăm
            </Typography>
            <Typography variant="body1" align="left" sx={{ mt: 3 }}>
              Escoala este o comunitate de partajare a cunoștințelor unde sute
              de milioane de elevi și experți se ajută între ei pentru a rezolva
              cele mai grele teme pentru acasă.
            </Typography>
          </Grid>
          <Grid item xs={12} sx={{ background: "white" }}>
            <HomeSchools />
          </Grid>
          <Grid item xs={12} sx={{ background: "white" }}>
            <HomeRepetitor />
          </Grid>
        </Grid>
      </Container>
      {/* </Box> */}
    </>
  );
}

export default Home;
