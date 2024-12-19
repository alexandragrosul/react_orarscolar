import React from "react";
import { Button, Paper, Typography } from "@mui/material";

const DecisionPanel = ({ onDecision, stage }) => {
  const decisions = {
    Student: [
      { label: "Part-time Job (+500 MDL)", value: 500, progress: 10 },
      { label: "Buy Books (-200 MDL)", value: -200, progress: 5 },
    ],
    Professional: [
      { label: "Invest in Stocks (+1000 MDL)", value: 1000, progress: 15 },
      { label: "Buy a Car (-5000 MDL)", value: -5000, progress: 10 },
    ],
    Investor: [
      { label: "High-Risk Investment (+5000 MDL)", value: 5000, progress: 20 },
      { label: "Donate to Charity (-1000 MDL)", value: -1000, progress: 10 },
    ],
    Retirement: [
      { label: "Spend on Vacation (-3000 MDL)", value: -3000, progress: 5 },
      { label: "Invest in Safe Bonds (+2000 MDL)", value: 2000, progress: 10 },
      { label: "Gift to Family (-1000 MDL)", value: -1000, progress: 5 },
    ],
  };

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" align="center" gutterBottom>
        Make a Decision
      </Typography>
      {decisions[stage].map((decision, index) => (
        <Button
          key={index}
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ marginBottom: 1 }}
          onClick={() => onDecision(decision.value, decision.progress)}
        >
          {decision.label}
        </Button>
      ))}
    </Paper>
  );
};

export default DecisionPanel;
