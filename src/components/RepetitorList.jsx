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

export const RepetitorList = ({ profesors }) => {
  return (
    <Stack
      spacing={2}
      mt={2}
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {profesors.map((profesor) => (
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
                <Box>
                  <Typography sx={{ fontWeight: 700 }} variant="h6">
                    {profesor.name}
                  </Typography>
                  <a href={`tel:${profesor.phone}`}>
                    <Typography>{profesor.phone}</Typography>
                  </a>
                  <Typography>Language: </Typography>
                  <Stack direction="row" spacing={1}>
                    {profesor.languages.map((language) => (
                      <Chip color="success" label={language} key={language} />
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
      ))}
    </Stack>
  );
};
export default RepetitorList;
