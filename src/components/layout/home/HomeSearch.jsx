import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function HomeSearch() {
  return (
    <>
      <Paper
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
      </Paper>
      <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
        Preda cu Escoala
      </h1>
    </>
  );
}
