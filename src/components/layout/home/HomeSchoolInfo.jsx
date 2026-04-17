import * as React from "react";
import { Grid, Stack, Typography, Card, CardContent, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function HomeSchoolInfo() {
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
            <Stack spacing={2}>
              <Typography variant="h4" fontWeight={800}>
                {t("schoolTitle.info")}
              </Typography>

              <Box
                sx={{
                  width: "60px",
                  height: "4px",
                  background: "#58a667",
                  borderRadius: "10px",
                }}
              />

              <Typography
                sx={{
                  color: "#555",
                  lineHeight: 1.6,
                  maxWidth: "600px",
                }}
              >
                {t("schoolInfo.info")}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );
}
