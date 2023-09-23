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
    // <Autocomplete
    //   value={value}
    //   onChange={(event, newValue) => {
    //     setValue(newValue);
    //     if (setFilteredSchools !== undefined) {
    //       const sc = filterSchools(schoolsData, newValue);
    //       setFilteredSchools(sc);
    //     }
    //   }}
    //   inputValue={inputValue}
    //   onInputChange={(event, newInputValue) => {
    //     setInputValue(newInputValue);
    //   }}
    //   id="school-search"
    //   options={options}
    //   fullWidth
    //   renderOption={(props, option) => (
    //     <Box component="li" {...props}>
    //       {option}
    //     </Box>
    //   )}
    //   renderInput={(params) => (
    //     <TextField {...params} label="Selectati scoala" />
    //   )}
    // />

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
      sx={{
        "& .MuiInputBase-root": {
          borderRadius: "50px", // Задаем радиус скругления для текстового поля
        },
        "& .MuiAutocomplete-paper": {
          borderRadius: "50px", // Задаем радиус скругления для выпадающего списка
        },
        "& .MuiPaper-root": {
          borderRadius: "50px", // Задаем радиус скругления для опций в выпадающем списке
        },
      }}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option}
        </Box>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Selectati scoala" />
      )}
    />
  );
};
export default SchoolsSearch;
