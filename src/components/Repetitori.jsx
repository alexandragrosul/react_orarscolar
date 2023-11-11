import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Typography } from "@mui/material";
import { Box, Grid, Stack } from "../../node_modules/@mui/material/index";
import RoundButton from "./layout/RoundButton";
import { Link } from "react-router-dom";
import { CardComponent } from "./Card";

const Repetitori = () => {
  const materialCode = {
    rom: "Romana",
    fr: "Franceza",
    eng: "English",
    germ: "Germana",
    mate: "Matematica",
    inf: "Informatica",
    fiz: "Fizica",
    chm: "Chimia",
    geo: "Geografia",
    ist: "Istoria",
    chi: "Chineza",
  };

  const [coaches, setCoaches] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [filteredProfesors, setFilteredProfesors] = useState([]);

  const filteredByMaterial = (material) => {
    console.log(material);
    setFilteredProfesors(
      coaches.filter((coaches) => {
        return coaches.material.includes(material);
      })
    );
    setSelectedMaterial(material);
  };

  useEffect(() => {
    fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/coaches.json"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const arrayOfObjects = Object.keys(data)?.map((key) => ({
            id: key,
            city: data[key].city,
            languages: data[key].languages,
            material: data[key].material,
            name: data[key].name,
            phone: data[key].phone,
            description: data[key].description,
            email: data[key].email,
            experience: data[key].experience,
            isVerified: data[key].isVerified,
            price: data[key].price,
            workingHours: data[key].workingHours,
          }));

          setCoaches(arrayOfObjects);
          setFilteredProfesors(arrayOfObjects);
        }
      })
      .catch((error) => {
        console.error("Error fetching coaches:", error);
      });
  }, []);

  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
            Repetitori
          </h1>
        </Grid>
        <Grid item xs={6} align="center">
          <Link to={"/repetitor/add"}>
            <RoundButton name={"Adauga Repetitor"} style={{ color: "white" }} />
          </Link>
        </Grid>
      </Grid>
      <FormControl fullWidth>
        <InputLabel sx={{ m: 0, p: 0 }} id="demo-simple-select-label">
          Repetitor
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedMaterial}
          label="Age"
          clearable="true"
          onChange={(e) => filteredByMaterial(e.target.value)}
          sx={{ borderRadius: "75px", border: "1px solid green" }}
        >
          {Object.values(materialCode).map((repetitori) => (
            <MenuItem value={repetitori} key={repetitori}>
              {repetitori}
            </MenuItem>
          ))}
          {/* <MenuItem value={"English"}>English</MenuItem> */}
        </Select>
      </FormControl>
      {selectedMaterial && (
        <Typography align="center" variant="h5" sx={{ fontWeight: 700, m: 3 }}>
          {selectedMaterial}
        </Typography>
      )}
      {/* <RepetitorList profesors={filteredProfesors} /> */}

      <Stack spacing={2} sx={{ marginTop: 2, paddingBottom: "70px" }}>
        {filteredProfesors.map((profesor, index) => {
          return (
            <Box key={index}>
              <CardComponent profesor={profesor} />
            </Box>
          );
        })}
      </Stack>
      {filteredProfesors.length === 0 && (
        <Typography align="center" variant="body1">
          Nu am gasit profesori
        </Typography>
      )}
    </>
  );
};

export default Repetitori;
