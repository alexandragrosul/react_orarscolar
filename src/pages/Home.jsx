import logo from "../logo.svg";
import { useState, useEffect } from "react";
import "../App.css";
import "fontsource-roboto";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Select from "@mui/material/Select";
import { CardComponent } from "../components/Card";
import {
  Typography,
  Stack,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Container,
} from "@mui/material";
import Repetitori from "../components/Repetitori";
import NewsList from "../components/NewsList";
import { Link } from "react-router-dom";
const lessons = [
  { value: "mate", label: "Matematica", price: 120 },
  { value: "romana", label: "Limba romana", price: 150 },
  { value: "istoria", label: "Istoria", price: 100 },
];

function Home({ profesors }) {
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
      text: "Vacanta de toamna este acum!",
      date: "26.11.2023",
      id: 2,
    },
    {
      name: "Three News",
      text: "Vacanta de iarna este acum!",
      date: "26.01.2024",
      id: 3,
    },
  ];

  return (
    <>
      <div className="hero-container">
        <Container
          sx={{
            height: "100%",
            py: 5,
          }}
        >
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{
                maxWidth: 600,
                mb: 3,
              }}
            >
              Наш сервис даст вам расписание ваших уроков, а если с ними
              возникнут трудности вы можете найти отличного репетитора!
            </Typography>
            <Box>
              <Link to="/your-link">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mr: 2, mb: 2 }}
                >
                  Найдите расписание
                </Button>
              </Link>
              <Link to="/your-link">
                <Button variant="contained" color="primary" sx={{ mb: 2 }}>
                  Найдите репетитора
                </Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </div>
      <Box>
        <Container sx={{ py: 5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h2"
              variant="h5"
              sx={{
                maxWidth: 600,
                mb: 3,
                fontWeight: 700,
                textAlign: "start",
              }}
            >
              Наши лучшие репетиторы
            </Typography>
            <Grid container spacing={2}>
              {profesors.map((profesor, index) => {
                return (
                  <Grid item xs={12} sm={6} lg={3} key={index}>
                    <CardComponent profesor={profesor} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* <Stack sx={{ height: "100vh" }}>
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
          // <NewsList news={news} />
        </Stack> */}
    </>
  );
}

export default Home;
