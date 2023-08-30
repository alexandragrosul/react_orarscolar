import { Tabs, Tab, Box, Grid } from "@mui/material";
import { useState } from "react";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Timetable = () => {
  const [dayWeek, setDayWeek] = useState("Item One");
  const handleDayWeek = (event) => {
    setDayWeek(event.target.value);
  };
  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={dayWeek}
          onChange={handleDayWeek}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <Box sx={{ hidden: dayWeek !== 0 }}>1</Box>
      <Grid container>
        <Grid item xs={2}>
          1
        </Grid>
        <Grid item xs={6}>
          Fizica
        </Grid>
        <Grid item xs={4}>
          08:35-10:20
        </Grid>
      </Grid>
    </Box>
  );
};

export default Timetable;
