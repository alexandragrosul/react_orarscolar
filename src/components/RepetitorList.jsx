import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/system";
import { Card, CardContent, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Repetitor from "./Repetitor";
import React, { useState, useEffect } from "react";

export const RepetitorList = ({ profesors }) => {
  return (
    <Stack
      spacing={2}
      mt={2}
      sx={{ width: "100%", bgcolor: "background.paper" }}
    >
      {profesors.length ? (
        profesors.map((profesor, index) => (
          <Repetitor profesor={profesor} key={index} />
        ))
      ) : (
        <p>Din pacate nu am gasit profesori!</p>
      )}
    </Stack>
  );
};
export default RepetitorList;
