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
import AlertDialog from "../../components/layout/AlertDialog";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

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
  description: "",
  price: "",
  class_time: "",
};

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

const cities = ["Chisinau", "Another City"];

const languages = ["English", "Romana"];

const RepetitorAdd = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
    try {
      addCoach(values);
      navigate("/repetitori");
    } catch (error) {
      console.warning(error.message);
    }
  };
  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
    >
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
                {t("repetitorAdd.title")}
              </Typography>
              <TextField
                name="name"
                label={t("repetitorAdd.name")}
                fullWidth
                value={values.name}
                onChange={handleChange}
                required
              />

              <TextField
                name="phone"
                label={t("repetitorAdd.phone")}
                fullWidth
                value={values.phone}
                onChange={handleChange}
                required
              />

              <FormControl fullWidth>
                <InputLabel>{t("repetitorAdd.city")}</InputLabel>
                <Field as={Select} name="city" required>
                  {cities.map((city) => (
                    <MenuItem key={city} value={city}>
                      {city}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>{t("repetitorAdd.material")}</InputLabel>
                <Field as={Select} name="material" multiple required>
                  {Object.keys(materialCode).map((code) => (
                    <MenuItem key={code} value={materialCode[code]}>
                      {materialCode[code]}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <FormControl fullWidth>
                <InputLabel>{t("repetitorAdd.languages")}</InputLabel>
                <Field as={Select} name="languages" multiple required>
                  {languages.map((language) => (
                    <MenuItem key={language} value={language}>
                      {language}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <TextField
                name="description"
                label={t("repetitorAdd.description")}
                fullWidth
                value={values?.description}
                onChange={handleChange}
                required
              />

              <TextField
                name="price"
                label={t("repetitorAdd.price")}
                fullWidth
                value={values.price}
                onChange={handleChange}
                required
              />

              <TextField
                name="class_time"
                label={t("repetitorAdd.classTime")}
                fullWidth
                value={values?.class_time}
                onChange={handleChange}
                required
              />

              <Button type="submit" variant="contained" color="primary">
                {t("repetitorAdd.addRepetitor")}
              </Button>

              <Button onClick={resetForm} variant="outlined" color="primary">
                {t("repetitorAdd.resetForm")}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      <AlertDialog
        title={t("repetitorAdd.errorTitle")}
        message={t("repetitorAdd.errorMessage")}
        open={open}
        setOpen={setOpen}
      />
    </Container>
  );
};

export default RepetitorAdd;
