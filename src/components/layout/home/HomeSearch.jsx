import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {
  Box,
  Link,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import repetitorPhoto from "../../../assets/profesor.jpg";
import RoundButton from "../RoundButton";
import InfoIcon from "@mui/icons-material/Info";
import SchoolsSearch from "../../school/SchoolsSearch";

export default function HomeSearch() {
  return (
    <>
      <SchoolsSearch setFilteredSchools={undefined} />
      {/* <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 400,
          borderRadius: "50px",
        }}
      >
        <InputBase
          size="big"
          sx={{ ml: 1, flex: 1, borderRadius: "50%" }}
          placeholder="Gaseste-ti scoala"
          inputProps={{ "aria-label": "search google maps" }}
        />
        <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton
          color="primary"
          sx={{ p: "10px" }}
          aria-label="directions"
        ></IconButton>
      </Paper> */}
      <Box
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
            }}
          />
        </Box>
      </Box>
    </>
  );
}
