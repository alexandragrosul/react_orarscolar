import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

const materialCode = {
  rom: "Limba romana",
  fr: "Limba franceza",
  eng: "Limba engleza",
  germ: "Limba germana",
  mate: "Matematica",
  inf: "Informatica",
  fiz: "Fizica",
  chm: "Chimia",
  geo: "Geografia",
  ist: "Istoria",
  chi: "Chineza",
};
const profesors = [
  {
    name: "Alexandru",
    id: 1,
    phone: "+373 67 673573",
    city: "Chisinau",
    material: [materialCode.eng],
    languages: ["English", "Romana"],
  },
  {
    name: "Lina",
    id: 2,
    phone: "+373 60 410723",
    city: "Chisinau",
    material: [materialCode.eng],
    languages: ["English", "Romana", "Русский"],
  },
  {
    name: "Tatiana",
    id: 3,
    phone: "+373 68 087674",
    city: "Chisinau",
    material: [materialCode.eng, materialCode.fr],
    languages: ["English", "Romana", "Franceza"],
  },
  {
    name: "Maxim",
    id: 4,
    phone: "+373 79 710900",
    city: "Chisinau",
    material: [materialCode.chi],
    languages: ["Chineza", "Русский"],
  },
  {
    name: "Ana",
    id: 5,
    phone: "+373 69 660698",
    city: "Chisinau",
    material: [materialCode.eng],
    languages: ["English", "Русский", "Romana"],
  },
  {
    name: "Ina",
    id: 6,
    phone: "+373 68 917615",
    city: "Chisinau",
    material: [materialCode.eng],
    languages: ["English", "Русский", "Romana"],
  },
  {
    name: "Ludmila",
    id: 7,
    phone: "+373 69 374789",
    city: "Chisinau",
    material: [materialCode.germ],
    languages: ["Germana", "Русский", "Romana"],
  },
  {
    name: "Dumitru",
    id: 8,
    phone: "+373 60 084299",
    city: "Chisinau",
    material: [materialCode.fiz, materialCode.mate],
    languages: ["Русский"],
  },
  {
    name: "Aliona",
    id: 9,
    phone: "+373 69 769006",
    city: "Chisinau",
    material: [materialCode.germ],
    languages: ["Germana", "Русский", "Romana"],
  },
  {
    name: "Marina",
    id: 10,
    phone: "+373 69 145487",
    city: "Chisinau",
    material: [materialCode.eng],
    languages: ["English", "Русский", "Romana"],
  },
  {
    name: "Oleg",
    id: 11,
    phone: "+373 62 089912",
    city: "Chisinau",
    material: [materialCode.eng],
    languages: ["English", "Русский"],
  },
  {
    name: "Valentina",
    id: 12,
    phone: "+373 69 451657",
    city: "Chisinau",
    material: [materialCode.mate],
    languages: ["English", "Русский"],
  },
  {
    name: "Marina",
    id: 13,
    phone: "+373 69 145487",
    city: "Chisinau",
    material: [materialCode.eng],
    languages: ["English", "Русский", "Romana"],
  },
  {
    name: "Valerii",
    id: 14,
    phone: "+373 69 145487",
    city: "Chisinau",
    material: [materialCode.fr],
    languages: ["Franceza", "Русский"],
  },
  {
    name: "Ana",
    id: 15,
    phone: "+373 69 660698",
    city: "Chisinau",
    material: [materialCode.eng, materialCode.germ],
    languages: ["Romana", "Русский", "English", "Germana"],
  },
  {
    name: "Anatol",
    id: 16,
    phone: "+373 69 660698",
    city: "Chisinau",
    material: [materialCode.mate],
    languages: ["Romana", "Русский"],
  },
  {
    name: "Diana",
    id: 17,
    phone: "+373 00 000000",
    city: "Chisinau",
    material: [materialCode.eng, materialCode.chi],
    languages: ["Romana", "English", "Chineza"],
  },
  {
    name: "Alexandra",
    id: 18,
    phone: "+373 69 170185",
    city: "Chisinau",
    material: [materialCode.inf],
    languages: ["Romana", "English", "Русский"],
  },
];

function Repetitor() {
  const { id } = useParams();
  const [profesor, setProfesor] = useState(null);
  useEffect(() => {
    const item = profesors.find((el) => el.id == id);
    setProfesor(item);
    console.log(item);
  }, []);
  return (
    <Container
      sx={{
        padding: "20px 0",
      }}
    >
      <Box>
        <Grid container>
          <Grid item xs={4}>
            <Avatar
              sx={{
                width: 180,
                height: 180,
              }}
              src="https://picsum.photos/180/180"
            />
          </Grid>

          <Grid item xs={8}>
            <Box>
              <Typography variant="h3">{profesor?.name}</Typography>
              <Typography variant="p">{profesor?.city}</Typography>
              <Typography variant="p">{profesor?.phone}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Repetitor;
