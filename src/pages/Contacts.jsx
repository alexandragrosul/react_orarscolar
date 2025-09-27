import {
  Container,
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AlertDialog from "../components/layout/AlertDialog";
import RoundButton from "../components/layout/RoundButton";
import SendIcon from "@mui/icons-material/Send";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

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
    if (!request.ok) setOpenFail(true);
    else setOpenSuccess(true);
  };

  const onSubmit = (values) => {
    try {
      sendMessage(values);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 6,
        backgroundColor: "#f0fdf4", // светло-зелёный фон
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h1"
            align="center"
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: "32px",
              fontWeight: "bold",
              mb: 2,
              color: "#166534",
              position: "relative",
              display: "inline-block",
              "&::after": {
                content: '""',
                display: "block",
                width: "60px",
                height: "3px",
                backgroundColor: "#16a34a",
                margin: "8px auto 0",
                borderRadius: "2px",
              },
            }}
          >
            {t("contacts.title")}
          </Typography>
        </Grid>
        <Grid item lg={6} md={8} sm={12}>
          <Paper
            elevation={6}
            sx={{
              p: 5,
              borderRadius: "32px", // больше скругление
              backgroundColor: "white",
              mt: 0, // убираем промежуток
            }}
          >
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {({ values, handleChange, resetForm }) => (
                <Form>
                  <Stack spacing={3}>
                    <TextField
                      name="name"
                      label={t("contacts.name")}
                      fullWidth
                      value={values.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                          "&.Mui-focused fieldset": {
                            borderColor: "#16a34a",
                            borderWidth: 2,
                          },
                        },
                      }}
                    />
                    <TextField
                      name="phone"
                      label={t("contacts.phone")}
                      fullWidth
                      value={values.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                          "&.Mui-focused fieldset": {
                            borderColor: "#16a34a",
                            borderWidth: 2,
                          },
                        },
                      }}
                    />
                    <TextField
                      name="email"
                      label={t("contacts.email")}
                      fullWidth
                      value={values.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "50px",
                          "&.Mui-focused fieldset": {
                            borderColor: "#16a34a",
                            borderWidth: 2,
                          },
                        },
                      }}
                    />
                    <TextField
                      name="message"
                      label={t("contacts.message")}
                      fullWidth
                      multiline
                      minRows={3}
                      value={values.message}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "24px",
                          "&.Mui-focused fieldset": {
                            borderColor: "#16a34a",
                            borderWidth: 2,
                          },
                        },
                      }}
                    />
                    <FormControl fullWidth>
                      <InputLabel>{t("contacts.sourceLabel")}</InputLabel>
                      <Field
                        as={Select}
                        name="source"
                        sx={{ borderRadius: "50px" }}
                      >
                        {sources.map((source) => (
                          <MenuItem key={source} value={source}>
                            {source}
                          </MenuItem>
                        ))}
                      </Field>
                    </FormControl>
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="center"
                      sx={{ mt: 2 }}
                    >
                      <RoundButton
                        name={t("contacts.sendButton")}
                        startIcon={<SendIcon />}
                        style={{
                          color: "white",
                          background:
                            "linear-gradient(90deg, #22c55e, #16a34a)",
                          borderRadius: "50px",
                          padding: "10px 28px",
                          transition: "all 0.3s ease",
                        }}
                        sx={{
                          "&:hover": {
                            background:
                              "linear-gradient(90deg, #16a34a, #15803d)",
                          },
                        }}
                      />
                      <RoundButton
                        name={t("contacts.resetButton")}
                        startIcon={<RestartAltIcon />}
                        style={{
                          color: "#16a34a",
                          borderColor: "#16a34a",
                          borderRadius: "50px",
                          padding: "10px 28px",
                          transition: "all 0.3s ease",
                        }}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#dcfce7",
                          },
                        }}
                        onClick={resetForm}
                        variant="outlined"
                      />
                    </Stack>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Paper>
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
