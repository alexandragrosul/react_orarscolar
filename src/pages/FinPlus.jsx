import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { CardMedia } from "../../node_modules/@mui/material/index";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/system";

const routes = [
  {
    path: "/finplus/invest",
    title: "Invest",
    description: "Manage your investments smartly.",
    img: "/images/invest.jpg",
  },
  {
    path: "/finplus/budget",
    title: "Budget",
    description: "Plan and track your family budget.",
    img: "/images/budget.jpg",
  },
  {
    path: "/finplus/loan",
    title: "Loan",
    description: "Calculate and optimize your loans.",
    img: "/images/loan_calc.jpg",
  },
  {
    path: "/finplus/tax",
    title: "Tax",
    description: "Understand and calculate taxes.",
    img: "/images/tax.jpg",
  },
];
const FinPlus = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
        {t("finPlus.title")}
      </h1>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ textAlign: "center" }}
      >
        {t("finPlus.description")}
      </Typography>
      <Grid container spacing={3} sx={{ padding: 3 }}>
        {routes.map((route) => (
          <Grid item xs={12} sm={6} md={4} key={route.path}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardActionArea component={Link} to={route.path}>
                <CardMedia
                  component="img"
                  height="140"
                  image={route.img}
                  alt={`${route.title} image`}
                />
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
    </Container>
  );
};

export default FinPlus;
