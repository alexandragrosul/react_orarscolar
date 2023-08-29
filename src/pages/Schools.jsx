import { schoolsData } from "../utils/schoolsData";
import School from "../components/School";
import { Container } from "@mui/system";
import {
  Autocomplete,
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "../../node_modules/@mui/material/index";
import React from "react";
const Schools = () => {
  const schoolsOptions = (schoolsData) => {
    const schools = [];
    schoolsData?.forEach((school) => {
      // schools.push({ id: school.id, name: school.name });
      schools.push(school.name);
    });
    return schools;
  };

  const options = schoolsOptions(schoolsData);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [filteredSchools, setFilteredSchools] = React.useState(schoolsData);
  const filterSchools = (schools, name) => {
    console.log({ name });
    if (!name) return schools;
    return schools.filter((school) => {
      console.log(school.name === name);
      return school.name === name;
    });
  };
  return (
    <Container
      sx={{
        padding: "20px 0",
      }}
    >
      <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
        Scoli
      </h1>

      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Autocomplete
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              console.log(newValue);
              const sc = filterSchools(schoolsData, newValue);
              setFilteredSchools(sc);
            }}
            // getOptionLabel={(option) => option.name}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              console.log(newInputValue);
              // setFilteredSchools(filterSchools(filteredSchools, newInputValue));
            }}
            id="controllable-states-demo"
            options={options}
            // sx={{ width: 300 }}
            fullWidth
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option}
              </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Scoli" />}
            sx={{ borderRadius: "75px", border: "1px solid green" }}
          />
        </FormControl>
      </Box>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {filteredSchools.map((school, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <School school={school} key={school.id} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Schools;
