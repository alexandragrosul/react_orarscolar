import * as React from "react";
import {
  Grid,
  Link,
  Stack,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import schoolPhoto from "../../../assets/school.jpg";
import RoundButton from "../RoundButton";
import SchoolsSearch from "../../school/SchoolsSearch";

export default function HomeEcology() {
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
            alt="repetior"
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
              Ecologia la Scoala ta
            </h6>
            <Typography style={{ textAlign: "left", marginLeft: "25px" }}>
              Scoala este forate importanta petru un copil
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
              Scoala ta nu este in lista?
            </Typography>
            <Link to={"/schools/add"}>
              <RoundButton
                name="Adauga scoala"
                style={{ color: "white", mr: 2, alignItems: "center" }}
              />
            </Link>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
