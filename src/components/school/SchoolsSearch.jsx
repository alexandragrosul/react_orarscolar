import React from "react";
import {
  Autocomplete,
  Box,
  TextField,
} from "../../../node_modules/@mui/material/index";
import { schoolsData } from "../../utils/schoolsData";

const filterSchools = (schools, name) => {
  if (!name) return schools;
  return schools.filter((school) => {
    return school.name === name;
  });
};

const SchoolsSearch = ({ setFilteredSchools }) => {
  const schoolsOptions = (schoolsData) => {
    const schools = [];
    schoolsData?.forEach((school) => {
      schools.push(school.name);
    });
    return schools;
  };

  const options = schoolsOptions(schoolsData);

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (setFilteredSchools !== undefined) {
          const sc = filterSchools(schoolsData, newValue);
          setFilteredSchools(sc);
        }
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      id="school-search"
      options={options}
      fullWidth
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Selectati scoala" />
      )}
      sx={{ borderRadius: "75px" }}
    />
  );
};
export default SchoolsSearch;
