import {
  Container,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "../../node_modules/@mui/material/index";
import { Formik, Form, Field, useFormik } from "formik";
import { useTranslation } from "react-i18next";


import AlertDialog from "../components/layout/AlertDialog";
import { useState } from "react";

const Contacts = () => {
  const {t} = useTranslation();
  const initialValues = {
    name: "",
    phone: "",
    email: "",
    message: "",
    source: "",
  };

  const sources = ["facebook", "google", "prieteni"];
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const sendMessage = async (payload) => {
    const request = await fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/messages.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    if (request.ok === false) setOpenFail(true);
    if (request.ok === true) {
      setOpenSuccess(true);
    }
  };

  const onSubmit = (values) => {
    try {
      sendMessage(values);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, resetForm }) => (
          <Form>
            <Stack
              spacing={3}
              //   minWidth="350px"
              maxWidth={"500px"}
              alignItems={"center"}
            >
              <h1 style={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}>
              {t('contacts.title')}
              </h1>
              {/* <Typography
                variant="h3"
                component="h1"
                sx={{ fontFamily: "Arial, sans-serif", fontSize: "32px" }}
              >
                Trimiteti mesaj
              </Typography> */}
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
                label={t('contacts.name')}
                fullWidth
                value={values.phone}
                onChange={handleChange}
              />
              <TextField
                name="email"
                label={t('contacts.email')}
                fullWidth
                value={values.email}
                onChange={handleChange}
                required
              />

              <TextField
                name="message"
                label={t('contacts.message')}
                fullWidth
                value={values.message}
                onChange={handleChange}
                required
              />

              <FormControl fullWidth>
                <InputLabel>{t('contacts.sourceLabel')}</InputLabel>
                <Field as={Select} name="source">
                  {sources.map((source) => (
                    <MenuItem key={source} value={source}>
                      {source}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>

              <Button type="submit" variant="contained" color="primary">
              {t('contacts.sendButton')}
              </Button>

              <Button onClick={resetForm} variant="outlined" color="primary">
              {t('contacts.resetButton')}
              </Button>
            </Stack>
          </Form>
        )}
      </Formik>
      <AlertDialog
        title={t('contacts.errorTitle')}
        message={t('contacts.errorMessage')}
        open={openFail}
        setOpen={setOpenFail}
      />
      <AlertDialog
        title={t('contacts.successTitle')}
        message={t('contacts.successMessage')}
        open={openSuccess}
        setOpen={setOpenSuccess}
      />
    </Container>
  );
};

export default Contacts;
