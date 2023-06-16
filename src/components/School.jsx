import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import { red, grey } from "@mui/material/colors";
import { Card, CardContent, Box, Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const School = ({ school }) => {
  const [showAll, setShowAll] = useState(false);
  const greyLight = grey[400];
  const handleClick = () => {
    if (school.serviceAdress.length > 4) {
      setShowAll(!showAll);
    }
  };
  return (
    <Card sx={{ marginBottom: 3 }} key={school.id}>
      <CardContent>
        <Grid container sx={{ alignItems: "center" }} spacing={2}>
          <Grid item xs={12} md={6}>
            <Link to={`/schools/${school.id}`}>
              <img src="https://picsum.photos/300/200" />
            </Link>
          </Grid>
          <Grid item xs={12} md={6}>
            <Link to={`/schools/${school.id}`}>
              <Typography sx={{ fontWeight: 700 }} variant="h6">
                {school.name}
              </Typography>
            </Link>
            <Box>
              <Typography>Phone:</Typography>
              <Typography>{school.phone}</Typography>
            </Box>
            <ul>
              {showAll
                ? school.serviceAdress.map((adress, index) => (
                    <li key={index}>{adress}</li>
                  ))
                : school.serviceAdress
                    .slice(0, 4)
                    .map((adress, index) => <li key={index}>{adress}</li>)}
            </ul>
            <Button onClick={handleClick} variant="contained">
              {showAll ? "Hide" : "Show"}
            </Button>
            <Typography>{school.schoolAdress}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default School;
