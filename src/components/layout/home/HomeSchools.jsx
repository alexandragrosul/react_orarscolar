import * as React from "react";
import {
  Grid,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import schoolPhoto from "../../../assets/school.jpg";
import RoundButton from "../RoundButton";
import SchoolsSearch from "../../school/SchoolsSearch";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function HomeSchools() {
  const { t } = useTranslation();

  return (
    <>
      <Grid container mb={4} spacing={2} alignItems="center">
        <Grid item xs={12} md={6} sx={{ mt: { xs: 2 } }}>
          <img
            src={schoolPhoto}
            style={{
              width: "100%",
              borderRadius: "89px",
            }}
            alt="Repetior"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack spacing={3}>
            <h6
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: "32px",
                textAlign: "left",
                margin: 0,
                marginLeft: "25px",
              }}
            >
              {t("homeSchools.schoolIsVeryImportant")}
            </h6>
            <Typography style={{ textAlign: "left", marginLeft: "25px" }}>
              {t("homeSchools.schoolNotInList")}
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
            <SchoolsSearch setFilteredSchools={undefined} />
          </Stack>
          <Stack alignItems="center" flex sx={{ mt: 2 }}>
            <Typography style={{ textAlign: "left", marginLeft: "25px" }}>
            {t('homeSchools.schoolNotInList')}
            </Typography>
            <Link to={"/schools"}>
              <RoundButton
                name={t('homeSchools.allSchools')}
                color="#FB8136"
                style={{ color: "white", mr: 2, alignItems: "center" }}
              />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
