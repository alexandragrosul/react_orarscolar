import logo from "../logo.svg";
import { useState, useEffect } from "react";
import "../App.css";
import "fontsource-roboto";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { Typography, Stack } from "@mui/material";
import Repetitori from "../components/Repetitori";
import NewsList from "../components/NewsList";
const lessons = [
  { value: "mate", label: "Matematica", price: 120 },
  { value: "romana", label: "Limba romana", price: 150 },
  { value: "istoria", label: "Istoria", price: 100 },
];

function Home() {
  const [repetitori, setRepetitori] = useState("");

  const [price, setPrice] = useState("");

  const [material, setMaterial] = useState("");

  const [counter, setCounter] = useState(0);

  const [scoli, setScoli] = useState("");
  // useEffect(() => {
  //   const item = lessons.find((lesson) => lesson.value === repetitori);
  //   setPrice(item.price);
  // }, [repetitori]);
  // const handleChange = (event) => {
  //   setMaterial(event.target.value);
  // };

  const handleChange = (event) => {
    setRepetitori(event.target.value);
  };

  const news = [
    {
      name: "One News",
      text: "Vacanta de vara este acum!",
      date: "26.06.2023",
      id: 1,
    },
    {
      name: "Two News",
      text: "Toamna de vara este acum!",
      date: "26.11.2023",
      id: 2,
    },
    {
      name: "Three News",
      text: "Iarna de vara este acum!",
      date: "26.01.2024",
      id: 3,
    },
  ];

  return (
    <>
      <Container fixed>
        <Stack sx={{ height: "100vh" }}>
          <h2>Scoli</h2>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Scoli</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={scoli}
                label="Scoli"
                onChange={handleChange}
              >
                <MenuItem value={"IPLT Waldorf"}>Waldorf</MenuItem>
                <MenuItem value={"Ion Creanga"}>Ion Creanga</MenuItem>
                <MenuItem value={"Socrate"}>Socrate</MenuItem>
              </Select>
            </FormControl>
            <p>{scoli}</p>
          </Box>

          <h2>Repetitori</h2>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Repetitori</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={repetitori}
                label="Repetitori"
                onChange={handleChange}
              >
                <MenuItem value={"Matematica"}>Mate</MenuItem>
                <MenuItem value={"Engleza"}>English</MenuItem>
                <MenuItem value={"Romana"}>Romana</MenuItem>
              </Select>
            </FormControl>
            <p>{repetitori}</p>
          </Box>
          <h2>Stiri</h2>
          <NewsList news={news} />
          {/* <Repetitori /> */}
          {/* <Chip label={material} /> */}
          {/* <Typography variant="body1">Pret: {price}</Typography> */}
        </Stack>
      </Container>
    </>
  );
}

export default Home;
