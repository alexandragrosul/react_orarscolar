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
  Fade,
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
    className: "",
    message: "",
    dangerNow: false,
  };

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (values) => {
    const errors = {};
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
    setLoading(true);
    await sendMessage(values);
    setLoading(false);
    resetForm();
  };

  const fieldStyles = {
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px",
      backgroundColor: "#ffffff",
      "&.Mui-focused fieldset": {
        borderColor: "#16a34a",
        borderWidth: 2,
      },
    },
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 10,
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)",
      }}
    >
      <Stack spacing={10} alignItems="center">
        {/* HERO */}
        <Fade in timeout={1000}>
          <Box
            textAlign="center"
            sx={{
              background: "linear-gradient(135deg, #dcfce7, #5aa86aa6)",
              p: 6,
              borderRadius: "32px",
              width: "calc(100% - 222px)", // Adjust width to prevent overflow
              maxWidth: "100%", // Ensure it doesn't exceed the container width
              margin: "0 auto", // Center the box
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              color="#166534"
              gutterBottom
              sx={{ whiteSpace: "pre-line" }}
            >
              {t("anonymous.heroTitle")}
            </Typography>

            <Typography maxWidth="600px" mx="auto" color="text.secondary">
              {t("anonymous.heroText")}
            </Typography>
          </Box>
        </Fade>

        {/* TRUST BADGES */}
        <Stack
          direction="row"
          spacing={3}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Paper sx={{ p: 2, borderRadius: 4 }}>🔒 100% Anonymous</Paper>
          <Paper sx={{ p: 2, borderRadius: 4 }}>
            ⚡ Sent Directly to Administration
          </Paper>
          <Paper sx={{ p: 2, borderRadius: 4 }}>🛡 Safe & Confidential</Paper>
        </Stack>

        {/* WHY SPEAK UP */}
        <Box maxWidth="700px">
          <Alert severity="info" sx={{ borderRadius: "16px" }}>
            {t("anonymous.whyText")}
          </Alert>
        </Box>

        {/* HOW IT WORKS */}
        <Box textAlign="center" width="100%">
          <Typography
            variant="h5"
            fontWeight="bold"
            mb={4}
            sx={{ color: "#166534", textTransform: "uppercase" }}
          >
            {t("anonymous.howTitle")}
          </Typography>

          <Stack spacing={2}>
            <Paper
              sx={{
                p: 1,
                borderRadius: 4,
                background: "none",
                boxShadow: "none",
              }}
            >
              {t("anonymous.step1")}
            </Paper>
            <Paper
              sx={{
                p: 1,
                borderRadius: 4,
                background: "none",
                boxShadow: "none",
              }}
            >
              {t("anonymous.step2")}
            </Paper>
            <Paper
              sx={{
                p: 1,
                borderRadius: 4,
                background: "none",
                boxShadow: "none",
              }}
            >
              {t("anonymous.step3")}
            </Paper>
          </Stack>
        </Box>

        {/*1FORM */}
        <Paper
          elevation={0}
          sx={{
            p: 6,
            borderRadius: "28px",
            width: "100%",
            maxWidth: "650px",
            background: "#ffffff",
            boxShadow: "0 20px 60px rgba(22, 163, 74, 0.15)",
            transition: "0.3s ease",
            "&:hover": {
              boxShadow: "0 25px 80px rgba(22, 163, 74, 0.25)",
            },
          }}
        >
          <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={onSubmit}
          >
            {({ values, handleChange, errors, touched }) => (
              <Form>
                <Stack spacing={4}>
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
                    minRows={5}
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
                          color: "#ef4444",
                          "&.Mui-checked": { color: "#dc2626" },
                        }}
                      />
                    }
                    label={t("anonymous.danger")}
                  />

                  <Typography variant="caption" color="text.secondary">
                    {t("anonymous.noPersonalDataWarning")}
                  </Typography>

                  <RoundButton
                    type="submit"
                    disabled={loading}
                    name={
                      loading ? t("anonymous.sending") : t("anonymous.send")
                    }
                    startIcon={<SendIcon />}
                    style={{
                      color: "white",
                      background: "linear-gradient(90deg, #22c55e, #16a34a)",
                      borderRadius: "40px",
                      padding: "14px 36px",
                    }}
                  />
                </Stack>
              </Form>
            )}
          </Formik>
        </Paper>

        {/* FOR PARENTS / TEACHERS */}
        <Box textAlign="center" maxWidth="600px">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            {t("anonymous.forAdultsTitle")}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t("anonymous.forAdultsText")}
          </Typography>
        </Box>
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
