import * as React from "react";
import { Grid, Stack, Card, CardContent, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import schoolPhoto from "../../../assets/pexels-max-fischer-5212320.jpg";
import RoundButton from "../RoundButton";

export default function HomeEnrollment() {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} display="flex" justifyContent="center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ width: "100%" }}
      >
        <Card
          sx={{
            borderRadius: "24px",
            p: { xs: 2, md: 4 },
            boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
          }}
        >
          <CardContent>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
                <Stack spacing={3}>
                  <Typography variant="h4" fontWeight={800}>
                    {t("homeEnrollment.title")}
                  </Typography>

                  <Typography sx={{ color: "#555", lineHeight: 1.7 }}>
                    {t("homeEnrollment.description")}
                  </Typography>

                  <Box>
                    <Link to="/schools" style={{ textDecoration: "none" }}>
                      <RoundButton
                        name={t("homeEnrollment.button")}
                        color="#58a667"
                        style={{ color: "white" }}
                      />
                    </Link>
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
                <Box
                  component="img"
                  src={schoolPhoto}
                  alt={t("homeEnrollment.title")}
                  sx={{
                    width: "100%",
                    height: { xs: 260, sm: 340, md: 390 },
                    objectFit: "cover",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
}
