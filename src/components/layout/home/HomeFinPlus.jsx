import * as React from "react";
import {
  Grid,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

import RoundButton from "../RoundButton";
import financePhoto from "../../../assets/finance.jpg";

function HomeFinPlus() {
  // const { t } = useTranslation();

  return (
    <Grid container mb={4} spacing={2} alignItems="center">
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
            Fin+
          </h6>
          <Typography
            sx={{
              textAlign: "left",
              "@media (min-width:1024px)": {
                marginLeft: "25px",
              },
            }}
          >
            Services Fin+ offers innovative financial solutions to enhance your
            financial literacy and empower you to make smarter financial
            decisions for a secure future.
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
          <Link to={"/finplus"}>
            <RoundButton
              name="Finance mini-apps"
              color="#a959a9"
              style={{ color: "white", mr: 2, alignItems: "center" }}
            />
          </Link>
        </Stack>
      </Grid>
      <Grid item xs={12} md={6} sx={{ mt: { xs: 2 } }}>
        <img
          src={financePhoto}
          style={{
            width: "100%",
            borderRadius: "89px",
          }}
          alt="repetior"
        />
      </Grid>
    </Grid>
  );
}

export default HomeFinPlus;
