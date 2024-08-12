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
  Grid,
} from "../../node_modules/@mui/material/index";
import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
// import qrCode from "../assets/qr.png";

import AlertDialog from "../components/layout/AlertDialog";
import { useState } from "react";
import RoundButton from "../components/layout/RoundButton";

const Contacts = () => {
  const { t } = useTranslation();
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
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontFamily: "Arial, sans-serif", fontSize: "32px", mt: 5 }}
          >
            {t("contacts.title")}
          </Typography>
        </Grid>
        <Grid item lg={6} md={6} sm={12}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, resetForm }) => (
              <Form>
                <Stack
                  spacing={3}
                  //   minWidth="350px"
                  maxWidth={"500px"}
                  alignItems={"center"}
                >
                  <TextField
                    sx={{ borderRadius: "75px", border: "1px solid green" }}
                    name="name"
                    label="Name"
                    fullWidth
                    value={values.name}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    sx={{ borderRadius: "75px", border: "1px solid green" }}
                    name="phone"
                    label={t("contacts.name")}
                    fullWidth
                    value={values.phone}
                    onChange={handleChange}
                  />
                  <TextField
                    sx={{ borderRadius: "75px", border: "1px solid green" }}
                    name="email"
                    label={t("contacts.email")}
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    sx={{ borderRadius: "75px", border: "1px solid green" }}
                    name="message"
                    label={t("contacts.message")}
                    fullWidth
                    value={values.message}
                    onChange={handleChange}
                    required
                  />
                  <FormControl
                    fullWidth
                    sx={{ borderRadius: "75px", border: "1px solid green" }}
                  >
                    <InputLabel>{t("contacts.sourceLabel")}</InputLabel>
                    <Field as={Select} name="source">
                      {sources.map((source) => (
                        <MenuItem key={source} value={source}>
                          {source}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                  <RoundButton
                    name={t("contacts.sendButton")}
                    style={{ color: "white" }}
                  ></RoundButton>
                  <RoundButton
                    name={t("contacts.resetButton")}
                    style={{
                      color: "#a959a9", // Цвет текста
                      borderColor: "#a959a9", // Цвет обводки
                    }}
                    onClick={resetForm}
                    variant="outlined"
                  ></RoundButton>
                </Stack>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>

      <AlertDialog
        title={t("contacts.errorTitle")}
        message={t("contacts.errorMessage")}
        open={openFail}
        setOpen={setOpenFail}
      />
      <AlertDialog
        title={t("contacts.successTitle")}
        message={t("contacts.successMessage")}
        open={openSuccess}
        setOpen={setOpenSuccess}
      />
    </Container>
  );
};

export default Contacts;
