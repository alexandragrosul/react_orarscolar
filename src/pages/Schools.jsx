import {
  Container,
  Grid,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Schools = () => {
  const { t } = useTranslation();
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch("https://api.escoala.md/api/schools")
      .then((response) => response.json())
      .then((data) => {
        setSchools(data?.data || []);
      })
      .catch((error) => console.error("Error fetching schools:", error));
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#EAFBEA",
        padding: "50px 0",
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "40px",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: "bold",
            color: "#388E3C",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          {t("schools.title")}
        </Typography>

        {/* Список школ */}
        <Grid container spacing={4}>
          {schools.map((school, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#F1F8E9",
                  borderRadius: "20px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="140"
                  image={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Staples_High_School%2C_Westport%2C_CT.jpg/1200px-Staples_High_School%2C_Westport%2C_CT.jpg" ||
                    "https://via.placeholder.com/300x140?text=No+Image"
                  }
                  alt={school.name}
                  sx={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                />
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontFamily: "'Roboto', sans-serif",
                      textAlign: "center",
                      color: "#2E7D32",
                    }}
                  >
                    {school.name}
                  </Typography>
                  <Box textAlign="center" marginTop={2}>
                    <Button
                      variant="contained"
                      color="success"
                      href={`/schools/${school.id}`}
                      sx={{
                        textTransform: "none",
                        borderRadius: "20px",
                        padding: "10px 20px",
                        fontSize: "14px",
                        fontWeight: "bold",
                      }}
                    >
                      {"View Details"}
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Schools;
