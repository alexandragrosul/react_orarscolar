import * as React from "react";
import {
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Stack,
} from "@mui/material";
import schoolPhoto from "../../../assets/school.jpg";
import RoundButton from "../RoundButton";
// import SchoolsSearch from "../../school/SchoolsSearch";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { useTranslation } from "react-i18next";

export default function HomeWebinar({ cardStyle }) {
  const { t } = useTranslation();

  return (
    <Grid item xs={12} display="flex" justifyContent="center">
      <Card sx={cardStyle}>
        <CardContent>
          <Grid container mb={4} spacing={2} alignItems="center">
            <Grid item xs={12} md={5} sx={{ mt: { xs: 2 } }}>
              <Card sx={cardStyle}>
                <CardContent>
                  <Typography variant="h5" fontWeight="bold" mb={2}>
                    Ghid gratuit pentru părinți
                  </Typography>

                  <Typography mb={2}>
                    Tot ce trebuie să știi pentru înscriere:
                  </Typography>

                  <List>
                    {[
                      "Lista documentelor necesare",
                      "Întrebări pentru școală",
                      "Pregătirea emoțională",
                      "Semne de dificultate",
                    ].map((text) => (
                      <ListItem
                        key={text}
                        sx={{
                          justifyContent: "center",
                          borderRadius: "12px",
                          mb: 1,
                          "&:hover": { background: "#f7f7f7" },
                        }}
                      >
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={7}>
              <Stack spacing={3}>
                <Typography
                  sx={{
                    px: 3,
                    color: "#666",
                    fontSize: "16px",
                  }}
                >
                  Lecții online, explicate simplu, potrivite pentru copii de
                  toate nivelurile.
                </Typography>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    textAlign: "left",
                    px: 3,
                    lineHeight: 1.3,
                  }}
                >
                  Oferă-i copilului tău șansa de a descoperi programarea prin
                  <Box component="span" sx={{ color: "#6C63FF" }}>
                    {" "}
                    webinare gratuite
                  </Box>
                  , interactive și ușor de înțeles.
                </Typography>
              </Stack>
              <Stack
                direction="row"
                align="center"
                alignItems="center"
                flex
                sx={{
                  "& > :not(style)": {
                    width: { xs: "100%" },
                  },
                  mt: 3,
                  backgroundColor: "white",
                  borderRadius: "50px",
                }}
                noValidate
                autoComplete="off"
              >
                {/* <SchoolsSearch setFilteredSchools={undefined} /> */}
              </Stack>
              <Stack alignItems="center" flex sx={{ mt: 2 }}>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeAiJnkUTtGSzEH6HP15yQTWPtB59uEEEAaQYcnGepu-xGvRA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <RoundButton
                    name="Înscrieți-vă acum"
                    color="#6C63FF"
                    style={{ color: "white" }}
                  />
                </a>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}
