import School from "../components/school/School";
import { Container } from "@mui/system";
import axios from "axios";
import {
  Autocomplete,
  Box,
  FormControl,
  Grid,
  TextField,
} from "../../node_modules/@mui/material/index";
import React from "react";
import { useEffect } from "react";

const Schools = () => {
  const schoolsOptions = (schoolsData) => {
    const schools = [];
    schoolsData?.forEach((school) => {
      console.log(school?.title?.rendered);
      schools.push(school?.title?.rendered);
    });
    return schools;
  };

  // const options = schoolsOptions(schoolsData);
  const [options, setOptions] = React.useState([]);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");
  const [filteredSchools, setFilteredSchools] = React.useState([]);

  async function fetchData() {
    try {
      const response = await axios.get(
        "http://escoala.md/admin/wp-json/wp/v2/posts?categories=3&_fields=id,slug,content,title"
      ); // Замените URL на адрес вашего сервера
      const data = response.data;
      setOptions(data);
      setFilteredSchools(data);
      // Обработка полученных данных
      console.log(data);
    } catch (error) {
      // Обработка ошибки
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const filterSchools = (schools, name) => {
    if (!name) return schools;
    return schools.filter((school) => {
      return school.title.rendered === name;
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
              setFilteredSchools(filterSchools(options, newValue));
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={schoolsOptions(options)}
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
