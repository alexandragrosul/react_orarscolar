import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Container,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import AlertDialog from "../components/layout/AlertDialog";

const initialValues = {
  name: "",
  phone: "",
  email: "",
  city: "",
  material: [],
  languages: [],
  isVerified: false,
  experience: "",
  workingHours: "",
};

const materialCode = {
  eng: "English",
  // ... другие коды материалов
};

const cities = ["Chisinau", "Another City"]; // Ваши города

const languages = ["English", "Romana"]; // Ваши языки

const RepetitorAdd = () => {
  const [open, setOpen] = useState(false);

  const addCoach = async (payload) => {
    const request = await fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/coaches.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    if (request.ok === false) {
      setOpen(true);
    }
  };

  const onSubmit = (values) => {
    console.log(values); // Обработка полученных значений
    try {
      addCoach(values);
    } catch (error) {
      console.warning(error.message);
      //TODO show error message to client
    }
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, resetForm }) => (
          <Form>
            <Stack
              spacing={3}
              minWidth="350px"
              maxWidth={"500px"}
              alignItems={"center"}
            >
              <Typography variant="h3" component="h1">
                Adaugarea repetitorilor
              </Typography>
              <TextField
                name="name"
                label="Name"
                fullWidth
                value={values.name}
                onChange={handleChange}
                required
              />

              <TextField
                name="phone"
                label="Phone"
                fullWidth
                value={values.phone}
                onChange={handleChange}
                required
              />

              <FormControl fullWidth>
                <InputLabel>City</InputLabel>
                <Field as={Select} name="city" required>
                  {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Material</InputLabel>
                <Field as={Select} name="material" multiple required>
                  {Object.keys(materialCode).map((code) => (
                    <MenuItem key={code} value={materialCode[code]}>
                      {materialCode[code]}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>Languages</InputLabel>
                <Field as={Select} name="languages" multiple required>
                  {languages.map((language) => (
                    <MenuItem key={language} value={language}>
                      {language}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <Button type="submit" variant="contained" color="primary">
                Adauga repetitor
              </Button>

              <Button onClick={resetForm} variant="outlined" color="primary">
                Reset form
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      <AlertDialog
        title={"Error"}
        message={
          "Nu s-a primit sa creati repetitor, incercati va rog mai tarziu"
        }
        open={open}
        setOpen={setOpen}
      />
    </Container>
  );
};

export default RepetitorAdd;
