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
import { Typography } from "@mui/material";
import Repetitori from "../components/Repetitori";
const lessons = [
  { value: "mate", label: "Matematica", price: 120 },
  { value: "romana", label: "Limba romana", price: 150 },
  { value: "istoria", label: "Istoria", price: 100 },
];

function Home() {
  const [repetitori, setRepetitori] = useState(lessons[0].value);

  const [price, setPrice] = useState(lessons[0].price);

  const [material, setMaterial] = useState("");
  useEffect(() => {
    const item = lessons.find((lesson) => lesson.value === repetitori);
    setPrice(item.price);
  }, [repetitori]);
  const handleChange = (event) => {
    setMaterial(event.target.value);
  };

  const handleSelectRepetitori = (event) => {
    setRepetitori(event.target.value);
  };

  return (
    <>
      <Container fixed>
        <Box sx={{ height: "100vh" }}>
          <h1>Main Page</h1>
          {/* <Repetitori /> */}
          {/* <Chip label={material} /> */}
          {/* <Typography variant="body1">Pret: {price}</Typography> */}
        </Box>
      </Container>
    </>
  );
}

export default Home;
