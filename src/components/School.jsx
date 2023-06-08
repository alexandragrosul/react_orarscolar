import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import { red, grey } from "@mui/material/colors";
import { Card, CardContent, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const School = ({ school }) => {
  const greyLight = grey[400];

  return (
    <Link to={`/repetitori/${school.id}`}>
      <Card
        sx={{ borderRadius: 10, border: "solid 1px green", marginBottom: 15 }}
        key={school.id}
      >
        <CardContent>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid
              item
              xs={12}
              sm={10}
              sx={{
                order: {
                  xs: 2,
                  sm: 1,
                },
              }}
            >
              <Box
                sx={{
                  textAlign: {
                    xs: "center",
                    sm: "left",
                  },
                }}
              >
                <Typography sx={{ fontWeight: 700 }} variant="h6">
                  {school.name}
                  {/* {profesor.material.map((material) => (
                    <Chip
                      color="success"
                      label={material}
                      key={material}
                      sx={{ marginTop: "8px !important" }}
                    />
                  ))} */}
                </Typography>
                <ul>
                  {school.serviceAdress.map((adress) => (
                    <li>{adress}</li>
                  ))}
                </ul>
                <Box>
                  <Typography>Phone:</Typography>
                  <Typography>{school.phone}</Typography>
                </Box>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    justifyContent: {
                      xs: "center",
                      sm: "flex-start",
                    },
                    flexWrap: "wrap",
                  }}
                >
                  {/* {profesor.languages.map((language) => (
                    <Chip
                      label={language}
                      key={language}
                      sx={{
                        marginTop: "8px !important",
                        backgroundColor: greyLight,
                      }}
                    />
                  ))} */}
                </Stack>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={2}
              sx={{
                order: {
                  xs: 1,
                  sm: 2,
                },
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "flex-start",
                },
              }}
            >
              <Typography>{school.schoolAdress}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};

export default School;
