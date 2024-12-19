import React from "react";
import { LinearProgress, Box, Typography } from "@mui/material";

const ProgressBar = ({ progress }) => {
  return (
    <Box sx={{ width: "100%", marginTop: 2 }}>
      <Typography variant="body1" align="center">
        Progress to Goal: {progress}%
      </Typography>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
};

export default ProgressBar;
