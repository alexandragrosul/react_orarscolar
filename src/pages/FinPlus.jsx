import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";

const routes = [
  {
    path: "/finplus/invest",
    title: "Invest",
    description: "Manage your investments smartly.",
  },
  {
    path: "/finplus/budget",
    title: "Budget",
    description: "Plan and track your family budget.",
  },
  {
    path: "/finplus/loan",
    title: "Loan",
    description: "Calculate and optimize your loans.",
  },
  {
    path: "/finplus/tax",
    title: "Tax",
    description: "Understand and calculate taxes.",
  },
];
const FinPlus = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {routes.map((route) => (
        <Grid item xs={12} sm={6} md={4} key={route.path}>
          <Card sx={{ maxWidth: 345, height: "100%" }}>
            <CardActionArea component={Link} to={route.path}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ textAlign: "center" }}
                >
                  {route.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ textAlign: "center" }}
                >
                  {route.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FinPlus;
