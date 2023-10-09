import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import { grey } from "@mui/material/colors";
import { Card, CardContent, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Repetitor = ({ profesor }) => {
  const greyLight = grey[400];

  return (
    <Link to={`/repetitori/${profesor.id}`}>
      <Card
        sx={{
          borderRadius: "75px",
          border: "solid 1px green",
          paddingLeft: "15px",
        }}
        key={profesor.id}
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
                  {profesor.name} repetitor de{" "}
                  {profesor.material.map((material) => (
                    <Chip
                      color="success"
                      label={material}
                      key={material}
                      sx={{ marginTop: "8px !important" }}
                    />
                  ))}
                </Typography>
                <Typography>{profesor.phone}</Typography>
                <Typography>Limbi cunoscute de profesor: </Typography>
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
                  {profesor.languages.map((language) => (
                    <Chip
                      label={language}
                      key={language}
                      sx={{
                        marginTop: "8px !important",
                        backgroundColor: greyLight,
                      }}
                    />
                  ))}
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
              <Avatar sx={{ width: 70, height: 70 }}>
                <Typography sx={{ fontWeight: 700 }} variant="h6">
                  {profesor.name.slice(0, 1)}
                </Typography>
              </Avatar>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Repetitor;
