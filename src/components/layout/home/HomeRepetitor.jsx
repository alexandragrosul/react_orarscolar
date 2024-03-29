import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Grid,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import repetitorPhoto from "../../../assets/profesor.jpg";
import RoundButton from "../RoundButton";
import InfoIcon from "@mui/icons-material/Info";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function HomeRepetitor() {
  const { t } = useTranslation();

  return (
    <>
      <Grid container mb={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <h6
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "32px",
                textAlign: "left",
                margin: 0,
              }}
            >
              {t('homeRepetitor.teachWithEscoala')}
            </h6>
            <Typography style={{ textAlign: "left", marginRight: "15px" }}>
            {t('homeRepetitor.earnMoneyBySharing')}
            </Typography>
            <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
              <SearchIcon
                sx={{ color: "primary.main", mr: 2, fontSize: "25px" }}
              />
              <Typography sx={{ textAlign: "left" }}>
              {t('homeRepetitor.findNewStudents')}
              </Typography>
            </Box>

            <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
              <CalendarTodayIcon
                sx={{ color: "primary.main", mr: 2, fontSize: "25px" }}
              />
              <Typography sx={{ textAlign: "left" }}>
              {t('homeRepetitor.growYourBusiness')}
              </Typography>
            </Box>

            <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
              <PaidOutlinedIcon
                sx={{ color: "primary.main", mr: 2, fontSize: "25px" }}
              />
              <Typography sx={{ textAlign: "left" }}>
              {t('homeRepetitor.receiveRewardSafely')}
              </Typography>
            </Box>

            <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
              <Link to={"/repetitor/add"}>
                <RoundButton
                  name={t('homeRepetitor.becomeTutor')}
                  style={{ color: "white", mr: 2 }}
                />
              </Link>
              <InfoIcon
                sx={{
                  color: "primary.main",
                  mr: 2,
                  fontSize: "20px",
                  marginLeft: 2,
                }}
              />
              <Link sx={{ textAlign: "left" }}>
              {t('homeRepetitor.howOurPlatformWorks')}
              </Link>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{ mt: { xs: 2 } }}>
          <img
            src={repetitorPhoto}
            style={{
              width: "100%",
              borderRadius: "89px",
            }}
            alt="Repetior"
          />
        </Grid>
      </Grid>
      {/* <Box
        sx={{
          display: "flex",
          width: "100% !important",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Box>
          <h6
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "32px",
              textAlign: "left",
              margin: 0,
            }}
          >
            Preda cu Escoala
          </h6>
          <Typography sx={{ textAlign: "left" }}>
            Câștigă bani împărtășindu-ți cunoștințele de specialitate cu
            studenții. Înscrie-te și începe să predai online cu Escoala
          </Typography>
          <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
            <SearchIcon
              sx={{ color: "primary.main", mr: 2, fontSize: "25px" }}
            />
            <Typography textAlign={"left"}>Gaseste-ti noi studenti</Typography>
          </Box>

          <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
            <CalendarTodayIcon
              sx={{ color: "primary.main", mr: 2, fontSize: "25px" }}
            />
            <Typography textAlign={"left"}>Dezvolta-ti activitatea</Typography>
          </Box>

          <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
            <PaidOutlinedIcon
              sx={{ color: "primary.main", mr: 2, fontSize: "25px" }}
            />
            <Typography textAlign={"left"}>
              Primeste-ti recompensa in siguranta
            </Typography>
          </Box>

          <Box display="flex" marginTop={2} sx={{ alignItems: "center" }}>
            <Link to={"/repetitor/add"}>
              <RoundButton
                name={"Devina Repetitor"}
                style={{ color: "white", mr: 2 }}
              />
            </Link>
            <InfoIcon sx={{ color: "primary.main", mr: 2, fontSize: "20px" }} />
            <Link textAlign={"left"}>Cum functioneaza platforma noastra</Link>
          </Box>
        </Box>
        <Box>
          <img
            src={repetitorPhoto}
            style={{
              maxWidth: "618px",
              maxHeight: "412px",
              objectFit: "cover",
              borderRadius: "30px",
            }}
            alt="Repetior photo"
          />
        </Box>
      </Box> */}
    </>
  );
}
