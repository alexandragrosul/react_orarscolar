import {
  Container,
  Stack,
  Typography,
  TextField,
  Paper,
  Box,
  Alert,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Formik, Form } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import AlertDialog from "../components/layout/AlertDialog";
import RoundButton from "../components/layout/RoundButton";
import SendIcon from "@mui/icons-material/Send";

const AnonymousMessage = () => {
  const { t } = useTranslation();

  const initialValues = {
    school: "",
    className: "",
    message: "",
    dangerNow: false,
  };

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.school)
      errors.school = t("anonymous.validation.schoolRequired");
    if (!values.message)
      errors.message = t("anonymous.validation.messageRequired");
    return errors;
  };

  const sendMessage = async (payload) => {
    const request = await fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/anonymous-messages.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );

    if (!request.ok) setOpenFail(true);
    else setOpenSuccess(true);
  };

  const onSubmit = async (values, { resetForm }) => {
    await sendMessage(values);
    resetForm();
  };

  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
      backgroundColor: "#f9fafb",
      "&.Mui-focused fieldset": {
        borderColor: "#16a34a",
        borderWidth: 2,
      },
    },
  };

  return (
    <Container
      maxWidth="md"
      sx={{ py: 8, backgroundColor: "#f0fdf4", minHeight: "100vh" }}
    >
      <Stack spacing={6} alignItems="center">
        {/* HERO */}
        <Box textAlign="center">
          <Typography
            variant="h3"
            fontWeight="bold"
            color="#166534"
            gutterBottom
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            {t("anonymous.heroTitle")}
          </Typography>

          <Typography maxWidth="600px" mx="auto" color="text.secondary">
            {t("anonymous.heroText")}
          </Typography>
        </Box>

        {/* HOW IT WORKS */}
        <Box textAlign="center">
          <Typography variant="h5" fontWeight="bold" mb={2}>
            {t("anonymous.howTitle")}
          </Typography>

          <Stack spacing={1}>
            <Typography>{t("anonymous.step1")}</Typography>
            <Typography>{t("anonymous.step2")}</Typography>
            <Typography>{t("anonymous.step3")}</Typography>
          </Stack>
        </Box>

        {/* FORM */}
        <Paper
          elevation={6}
          sx={{ p: 5, borderRadius: "24px", width: "100%", maxWidth: "600px" }}
        >
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, errors, touched }) => (
              <Form>
                <Stack spacing={3}>
                  <TextField
                    name="className"
                    label={t("anonymous.class")}
                    fullWidth
                    value={values.className}
                    onChange={handleChange}
                    sx={fieldStyles}
                  />

                  <TextField
                    name="message"
                    label={t("anonymous.message")}
                    fullWidth
                    multiline
                    required
                    minRows={4}
                    value={values.message}
                    onChange={handleChange}
                    error={touched.message && Boolean(errors.message)}
                    helperText={
                      (touched.message && errors.message) ||
                      `${values.message.length}/500`
                    }
                    inputProps={{ maxLength: 500 }}
                    sx={fieldStyles}
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        name="dangerNow"
                        checked={values.dangerNow}
                        onChange={handleChange}
                        sx={{
                          color: "#16a34a",
                          "&.Mui-checked": { color: "#16a34a" },
                        }}
                      />
                    }
                    label={t("anonymous.danger")}
                  />

                  <RoundButton
                    type="submit"
                    name={t("anonymous.send")}
                    startIcon={<SendIcon />}
                    style={{
                      color: "white",
                      background: "linear-gradient(90deg, #22c55e, #16a34a)",
                      borderRadius: "40px",
                      padding: "12px 32px",
                    }}
                  />
                </Stack>
              </Form>
            )}
          </Formik>
        </Paper>
      </Stack>

      <AlertDialog
        title={t("anonymous.successTitle")}
        message={t("anonymous.successMessage")}
        open={openSuccess}
        setOpen={setOpenSuccess}
      />

      <AlertDialog
        title={t("anonymous.errorTitle")}
        message={t("anonymous.errorMessage")}
        open={openFail}
        setOpen={setOpenFail}
      />
    </Container>
  );
};

export default AnonymousMessage;
