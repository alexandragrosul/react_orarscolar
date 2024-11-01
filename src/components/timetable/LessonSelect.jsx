import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Data from "../../assets/lessons.json";

export default function LessonSelect() {
  const { lessons } = Data;
  console.log(lessons);
  return (
    <Autocomplete
      disablePortal
      options={lessons}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}
