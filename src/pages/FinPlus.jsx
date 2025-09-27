import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Container } from "@mui/system";
import { Box } from "../../node_modules/@mui/material/index";

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
  {
    path: "/finplus/simulator",
    title: "Market simulation",
    description: "Understand how market works.",
    img: "/images/economy.jpg",
  },
];

const FinPlus = () => {
  const { t } = useTranslation();
  return (
    <Box sx={{ backgroundColor: "#f0fdf4", py: 8 }}>
      {/* светло-зелёный фон секции */}
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          align="center"
          sx={{
            mb: 2,
            fontWeight: 700,
            fontFamily: "Inter, sans-serif",
            color: "#2e7d32", // тёмно-зелёный акцент
          }}
        >
          {t("finPlus.title")}
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "text.secondary",
            mb: 5,
            maxWidth: "700px",
            mx: "auto",
          }}
        >
          {t("finPlus.description")}
        </Typography>
        <Grid container spacing={4}>
          {routes.map((route) => (
            <Grid item xs={12} sm={6} md={4} key={route.path}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: "16px",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                  },
                }}
              >
                <CardActionArea component={Link} to={route.path}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={route.img}
                    alt={`${route.title} image`}
                  />
                  <CardContent sx={{ textAlign: "center", p: 3 }}>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{
                        fontWeight: 600,
                        mb: 1,
                        color: "#2e7d32", // зелёный акцент
                      }}
                    >
                      {route.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {route.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FinPlus;
