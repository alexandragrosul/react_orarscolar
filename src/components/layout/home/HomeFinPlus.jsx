import * as React from "react";
import { Grid, Stack, Typography, Card, CardContent, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import RoundButton from "../RoundButton";
import financePhoto from "../../../assets/finance.jpg";

const fade = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function HomeFinPlus() {
  return (
    <Grid item xs={12} display="flex" justifyContent="center">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fade}
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
              {/* TEXT */}
              <Grid item xs={12} md={6}>
                <Stack spacing={3}>
                  <Typography variant="h4" fontWeight={800}>
                    Fin<span style={{ color: "#6d63ff" }}>+</span>
                  </Typography>

                  <Typography sx={{ color: "#555", lineHeight: 1.6 }}>
                    Instrumente simple și interactive care ajută copiii să
                    înțeleagă banii și să dezvolte gândire financiară sănătoasă.
                  </Typography>

                  <Box>
                    <Link to={"/finplus"} style={{ textDecoration: "none" }}>
                      <RoundButton
                        name="Finance mini-apps"
                        color="#6d63ff"
                        style={{ color: "white" }}
                      />
                    </Link>
                  </Box>
                </Stack>
              </Grid>

              {/* IMAGE */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={financePhoto}
                  alt="finance"
                  sx={{
                    width: "100%",
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

export default HomeFinPlus;
