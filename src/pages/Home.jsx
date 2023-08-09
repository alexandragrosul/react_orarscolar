import React, { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import HomeSearch from "../components/layout/home/HomeSearch";

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

  const handleChange = (event) => {
    setRepetitori(event.target.value);
  };
  // {

  //   useEffect(() => {
  //     const item = lessons.find((lesson) => lesson.value === repetitori);
  //     setPrice(item.price);
  //   }, [repetitori]);
  //   const handleChange = (event) => {
  //     setMaterial(event.target.value);
  //   };}

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

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: "none",
  }));

  return (
    <>
      {/* <div className="hero-container">
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
      </div> */}
      {/* <Box>
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
      </Box> */}
      <Box sx={{ background: "#d7e8d2" }}>
        <Container
          // maxWidth="xl"
          sx={{
            mt: 2,
          }}
        >
          <Grid container spacing={2} sx={{ background: "transparent" }}>
            {/* <Grid item xs={12}>
            <Item> */}
            {/* <video
                  src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/school-education-3575820-2997701.mp4?h=700"
                  autoplay="autoplay"
                  muted="muted"
                  loop="loop"
                  playsinline=""
                  type="video/mp4"
                  style={{ width: -"webkit-fill-available" }}
                ></video> */}
            {/* <video
                  src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/teacher-explaining-in-class-8802044-7190393.mp4?h=700"
                  autoplay="autoplay"
                  muted="muted"
                  loop="loop"
                  playsinline=""
                  type="video/mp4"
                ></video> */}
            {/* <video
                  src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/teacher-teaching-in-class-8802181-7114820.mp4?h=700"
                  autoplay="autoplay"
                  muted="muted"
                  loop="loop"
                  playsinline=""
                  type="video/mp4"
                ></video> */}
            {/* </Item>
          </Grid> */}
            <Grid item xs={7} sx={{ background: "transparent" }}>
              {/* <Item sx={{ background: "transparent" }}> */}
              <Typography
                variant="h2"
                component="h2"
                align="left"
                sx={{
                  marginTop: "70px",
                  fontWeight: "bold",
                  font: "Noto Sans Vithkuqi",
                }}
              >
                Elevii conduc lumea iar noi îi ajutăm
              </Typography>
              <Typography variant="body1" align="left" sx={{ mt: 3 }}>
                Escoala este o comunitate de partajare a cunoștințelor unde sute
                de milioane de elevi și experți se ajută între ei pentru a
                rezolva cele mai grele teme pentru acasă.
              </Typography>
              {/* Search */}

              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                  mt: 3,
                }}
                noValidate
                autoComplete="off"
              >
                <HomeSearch />
              </Box>
              {/* </Item> */}
            </Grid>

            {/* <Grid item xs={5} sx={{ display: "flex" }}>
            <Box sx={{ width: "100%", display: "flex" }}>
              <video
                src="https://cdnl.iconscout.com/lottie/premium/preview-watermark/teacher-teaching-in-class-8802181-7114820.mp4?h=700"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
                playsinline=""
                type="video/mp4"
                style={{ width: "inherit" }}
              ></video>
            </Box>
          </Grid> */}
          </Grid>
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
