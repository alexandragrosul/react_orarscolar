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
    <Link to={`/schools/${school.id}`}>
      <Card sx={{ marginBottom: 3 }} key={school.id}>
        <CardContent>
          <Grid container sx={{ alignItems: "center" }}>
            <Grid item xs={12} md={4}>
              <img src="https://picsum.photos/300/200" />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography sx={{ fontWeight: 700 }} variant="h6">
                {school.name}
              </Typography>

              <Box>
                <Typography>Phone:</Typography>
                <Typography>{school.phone}</Typography>
              </Box>
              <ul>
                {school.serviceAdress.map((adress, index) => (
                  <li key={index}>{adress}</li>
                ))}
              </ul>
              <Typography>{school.schoolAdress}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Link>
  );
};

export default School;
