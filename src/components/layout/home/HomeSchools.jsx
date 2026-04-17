import * as React from "react";
import { Grid, Stack, Card, CardContent, Typography, Box } from "@mui/material";
import schoolPhoto from "../../../assets/school.jpg";
import RoundButton from "../RoundButton";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HomeSchools() {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} display="flex" justifyContent="center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
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
              {/* IMAGE */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={schoolPhoto}
                  alt="school"
                  sx={{
                    width: "100%",
                    borderRadius: "20px",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  }}
                />
              </Grid>

              {/* TEXT */}
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Typography variant="h4" fontWeight={800}>
                    {t("homeSchools.schoolIsVeryImportant")}
                  </Typography>

                  <Typography sx={{ color: "#555" }}>
                    Alege școala potrivită pentru copilul tău rapid și simplu.
                  </Typography>

                  <Box>
                    <Link to={"/schools"} style={{ textDecoration: "none" }}>
                      <RoundButton
                        name={t("homeSchools.allSchools")}
                        color="#58a667"
                        style={{ color: "white" }}
                      />
                    </Link>
                  </Box>
                </Stack>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
}
