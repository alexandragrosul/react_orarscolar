import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import "fontsource-roboto";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Typography } from "@mui/material";

function App() {
  const [material, setMaterial] = useState("");
  const handleChange = (event) => {
    setMaterial(event.target.value);
  };
  const [selectRepetitori, setSelectRepetitori] = useState([
    { value: "mate", label: "Matematica", price: 100 },
    { value: "romana", label: "Limba romana", price: 150 },
    { value: "istoria", label: "Istoria", price: 200 },
  ]);

  const handleSelectRepetitori = (event) => {
    setSelectRepetitori([
      { value: event.target.value, label: event.target.value },
    ]);
    console.log(selectRepetitori);
  };

  return (
    <>
      <Header />
      <Container fixed>
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Repetitor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectRepetitori[0].value}
              label="Age"
              onChange={handleSelectRepetitori}
            >
              {selectRepetitori.map((repetitori) => (
                <MenuItem value={repetitori.value} key={repetitori.value}>
                  {repetitori.label}
                </MenuItem>
              ))}
              {/* <MenuItem value={"mate"}>Matematica</MenuItem> */}
              {/* <MenuItem value={"romana"}>Limba romana</MenuItem>
              <MenuItem value={"istoria"}>Istoria</MenuItem> 
             <MenuItem value={"fizica"}>Fizica</MenuItem>
              <MenuItem value={"geografia"}>Geografia</MenuItem>
              <MenuItem value={"informatica"}>Informatica</MenuItem>
              <MenuItem value={"muzica"}>Muzica</MenuItem>
              <MenuItem value={"pictura"}>Pictura</MenuItem>
              <MenuItem value={"germana"}>Limba germana</MenuItem>
              <MenuItem value={"engleza"}>Limba engleza</MenuItem>
              <MenuItem value={"franceza"}>Limba franceza</MenuItem>
              <MenuItem value={"chimia"}>Chimia</MenuItem> */}
            </Select>
          </FormControl>
          <Chip label={material} />
          <Typography variant="body1">
            Pret: {selectRepetitori[0].price}
          </Typography>
          ;
        </Box>
      </Container>
      <Footer />
    </>
  );
}

export default App;
