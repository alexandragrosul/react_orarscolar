import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import RepetitorList from "./RepetitorList";
import { Typography } from "@mui/material";
const Repetitori = () => {
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

  const filteredByMaterial = (material) => {
    setFilteredProfesors(
      profesors.filter((professor) => {
        return professor.material.includes(material);
      })
    );
    setSelectedMaterial(material);
  };

  /* const fetchProfesors = () => {
    return fetch("https://63fba9cf6ecb7e3702ae4bf6.mockapi.io/professors")
      .then((response) => response.json())
      .then((data) => setFilteredProfesors(data));
  };

  useEffect(() => {
    fetchProfesors();
  }, []);
  */

  const [selectedMaterial, setSelectedMaterial] = useState("");
  const [filteredProfesors, setFilteredProfesors] = useState(profesors);
  return (
    <>
      <h1>Repetitori</h1>
      <FormControl fullWidth>
        <InputLabel sx={{ m: 0, p: 0 }} id="demo-simple-select-label">
          Repetitor
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedMaterial}
          label="Age"
          onChange={(e) => filteredByMaterial(e.target.value)}
          sx={{ borderRadius: 5, border: "1px solid green" }}
        >
          {Object.values(materialCode).map((repetitori) => (
            <MenuItem value={repetitori} key={repetitori}>
              {repetitori}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedMaterial && (
        <Typography align="center" variant="h5" sx={{ fontWeight: 700, m: 3 }}>
          {selectedMaterial}
        </Typography>
      )}
      <RepetitorList profesors={filteredProfesors} />
    </>
  );
};

export default Repetitori;
