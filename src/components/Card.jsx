import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from "@mui/material";

export const CardComponent = ({ profesor }) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 140, width: "100%" }}
        image="https://picsum.photos/id/237/200/300"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {profesor.name}
        </Typography>
        <Box>
          {profesor.material.map((el) => {
            return <span>{el}</span>;
          })}
        </Box>
        {/* <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
