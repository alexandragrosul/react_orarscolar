// import School from "../components/school/School";
import { Container } from "@mui/system";
// import axios from "axios";
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "../../node_modules/@mui/material/index";
import React from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import NewSchool from "../components/school/NewSchool";
import SchoolsSearch from "../components/school/SchoolsSearch";

const Schools = () => {
  const { t } = useTranslation();

  const [filteredSchools, setFilteredSchools] = React.useState([]);
  const [schoolCategory, setSchoolCategory] = React.useState(10);
  const [schoolRegion, setSchoolRegion] = React.useState(10);

  const handleChangeShoolCategory = (event) => {
    setSchoolCategory(event.target.value);
  };
  const handleChangeSchoolRegion = (event) => {
    setSchoolRegion(event.target.value);
  };

  // async function fetchData() {
  //   try {
  //     const response = await axios.get("data.json"); // Замените URL на адрес вашего сервера
  //     const data = response.data.data.school_sector.schools;
  //     setFilteredSchools(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  useEffect(() => {
    // fetchData();
    fetch("https://api.escoala.md/api/schools")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        setFilteredSchools(data?.data);
      });
  }, []);

  // const filterSchools = (schools, name) => {
  //   if (!name) return schools;
  //   return schools.filter((school) => {
  //     return school.name === name;
  //   });
  // };

  return (
    <Container>
      <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
        {t("schools.title")}
      </h1>
      <Grid container spacing={2} direction="row">
        <Grid item xs={12} md={8}>
          <FormControl fullWidth>
            {/* <Autocomplete
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                // setFilteredSchools(filterSchools(options, newValue));
              }} 
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
              id="controllable-states-demo"
              options={schoolsOptions(options)}
              fullWidth
              renderOption={(props, option) => (
                <Box component="li" {...props} sx={{ color: "black" }}>
                  {option.name}
                </Box>
              )}
              renderInput={(params) => <TextField {...params} label="Scoli" />}
              sx={{ borderRadius: "75px", border: "1px solid green" }}
            /> */}

            <SchoolsSearch />
          </FormControl>
        </Grid>
        <Grid item xs={12} md={4}>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              {t("schools.profileLabel")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={schoolCategory}
              label="Profil"
              onChange={handleChangeShoolCategory}
              sx={{ borderRadius: "75px", border: "1px solid green" }}
            >
              <MenuItem value={10}>{t("schools.allProfile")}</MenuItem>
              <MenuItem value={20}>{t("schools.generalProfile")}</MenuItem>
              <MenuItem value={30}>{t("schools.musicProfile")}</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">
              {t("schools.regionLabel")}
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={schoolRegion}
              label="Profil"
              onChange={handleChangeSchoolRegion}
              sx={{ borderRadius: "75px", border: "1px solid green" }}
            >
              <MenuItem value={10}>{t("schools.allRegion")}</MenuItem>
              <MenuItem value={15}>{t("schools.chisinauRegion")}</MenuItem>
              <MenuItem value={20}>{t("schools.baltiRegion")}</MenuItem>
              <MenuItem value={30}>{t("schools.chimisliaRegion")}</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {filteredSchools.map((school, index) => (
          <Grid item xs={12} md={12} key={index}>
            {/* <School school={school} key={school.id} /> */}
            {<NewSchool school={school} key={school.id} />}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Schools;
