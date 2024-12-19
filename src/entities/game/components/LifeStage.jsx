import React from "react";
import { Typography, Paper } from "@mui/material";

const LifeStage = ({ stage }) => {
  const descriptions = {
    Student: "You are a student managing your education and expenses wisely.",
    Professional:
      "You are a working professional earning a salary. Make smart financial choices.",
    Investor:
      "You are an investor. Invest your money wisely to achieve your financial goals.",
    Retirement:
      "You're enjoying the fruits of your labor. Manage your retirement funds wisely.",
  };

  return (
    <Paper sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h6" align="center">
        {descriptions[stage]}
      </Typography>
    </Paper>
  );
};

export default LifeStage;
