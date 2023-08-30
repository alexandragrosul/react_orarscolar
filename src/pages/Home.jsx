import React from "react";
import { Container, Typography, Grid, Box } from "@mui/material";
import HomeSearch from "../components/layout/home/HomeSearch";

function Home({ profesors }) {
  return (
    <>
      <Box sx={{ background: "#d7e8d2", height: "calc(100vh - 100.5px)" }}>
        <Container
          sx={{
            mt: 2,
          }}
        >
          <Grid container spacing={2} sx={{ background: "transparent", pb: 8 }}>
            <Grid item xs={12} sx={{ background: "transparent" }}>
              <Typography
                variant="h2"
                component="h2"
                align="left"
                sx={{
                  marginTop: "70px",
                  fontWeight: "bold",
                  font: "Noto Sans Vithkuqi",
                }}
              >
                Elevii conduc lumea iar noi îi ajutăm
              </Typography>
              <Typography variant="body1" align="left" sx={{ mt: 3 }}>
                Escoala este o comunitate de partajare a cunoștințelor unde sute
                de milioane de elevi și experți se ajută între ei pentru a
                rezolva cele mai grele teme pentru acasă.
              </Typography>
              {/* Search */}

              <Box
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: { xs: "100%", sm: "400px" },
                  },
                  mt: 3,
                }}
                noValidate
                autoComplete="off"
              >
                <HomeSearch />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Home;
