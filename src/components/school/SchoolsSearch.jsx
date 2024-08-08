import React, { useEffect } from "react";
import {
  Autocomplete,
  Box,
  TextField,
} from "../../../node_modules/@mui/material/index";
import { schoolsData } from "../../utils/schoolsData";
import axios from "../../../node_modules/axios/index";
import { Link } from "../../../node_modules/react-router-dom/dist/index";

const filterSchools = (schools, name) => {
  if (!name) return schools;
  return schools.filter((school) => {
    return school.name === name;
  });
};

const SchoolsSearch = () => {
  const schoolsOptions = (schoolsData) => {
    const schools = [];
    schoolsData?.forEach(({ name, id }) => {
      schools.push({ label: name, id: id });
    });
    return schools;
  };

  // const options = schoolsOptions(schoolsData);

  // const [value, setValue] = React.useState(options[0]);
  // const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  // const [filteredSchools, setFilteredSchools] = React.useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("data.json"); // Замените URL на адрес вашего сервера
      const data = response.data.data.school_sector.schools;
      setOptions(data);
      // setFilteredSchools(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Autocomplete
      disablePortal
      fullWidth
      id="combo-box-demo"
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
        borderRadius: "75px",
        border: "1px solid green",
      }}
      options={schoolsOptions(options)}
      renderOption={(props, option) => (
        <Box component="li" {...props} sx={{ color: "black" }}>
          <Link to={`/schools/${option.id}`} style={{ width: "100%" }}>
            {option.label}
          </Link>
        </Box>
      )}
      renderInput={(params) => <TextField {...params} label="`School`" />}
    />
  );
};
export default SchoolsSearch;
