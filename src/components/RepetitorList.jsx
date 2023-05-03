import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import { Card, CardContent, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const RepetitorList = ({ profesors }) => {
  return (
    <Stack
      spacing={2}
      mt={2}
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {profesors.length ? (
        profesors.map((profesor) => (
          <Link to={`/repetitori/${profesor.id}`}>
            <Card
              sx={{ borderRadius: 10, border: "solid 1px green" }}
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
                        {profesor.name}
                      </Typography>
                      <a href={`tel:${profesor.phone}`}>
                        <Typography>{profesor.phone}</Typography>
                      </a>
                      <Typography>Language: </Typography>
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
                            color="success"
                            label={language}
                            key={language}
                            sx={{ marginTop: "8px !important" }}
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
        ))
      ) : (
        <p>Din pacate nu am gasit profesori!</p>
      )}
    </Stack>
  );
};
export default RepetitorList;
