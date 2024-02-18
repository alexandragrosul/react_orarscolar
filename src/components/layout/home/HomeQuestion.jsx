import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "../../../../node_modules/@mui/material/index";
import RoundButton from "../RoundButton";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, useFormik } from "formik";
import { useState } from "react";
import AlertDialog from "../AlertDialog";

const HomeQuestion = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = React.useState("");
  const handleClickQuestionOpen = () => {
    setOpen(true);
  };

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFail, setOpenFail] = useState(false);
  //   const handleClickTasskOpen = () => {
  //     onButtonClick("tasks");
  //   };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //   const saveTask = () => {
  //     const existingTasks = JSON.parse(localStorage.getItem("tasks"));
  //     const payLoad = {
  //       name: taskName,
  //       id: new Date().valueOf(),
  //       status: false,
  //     };
  //     if (existingTasks) {
  //       existingTasks.push(payLoad);
  //       localStorage.setItem("tasks", JSON.stringify(existingTasks));
  //     } else {
  //       localStorage.setItem("tasks", JSON.stringify([payLoad]));
  //     }
  //     setTaskName("");
  //   };

  const initialValues = {
    question: "",
    material: "",
  };

  const sendMessage = async (payload) => {
    const request = await fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/questions.json",
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

  React.useEffect(() => {
    if (open && openSuccess) {
      setOpen(false);
    }
  }, [openSuccess]);
  return (
    <>
      <Typography
        variant="h3"
        component="h2"
        align="left"
        sx={{
          mt: 1,
          fontWeight: "bold",
          font: "Noto Sans Vithkuqi",
        }}
      >
        {t("question.title")}
      </Typography>
      <RoundButton
        name={t("question.askButton")}
        style={{ color: "white", marginTop: "15px", backgroundColor: "orange" }}
        onClick={handleClickQuestionOpen}
      />

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{t("question.dialogTitle")}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t("question.dialogContent")}</DialogContentText>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, handleChange, resetForm }) => (
              <Form>
                <TextField
                  name="question"
                  label="Question"
                  fullWidth
                  value={values.question}
                  onChange={handleChange}
                  required
                />
                <TextField
                  name="material"
                  label="Material"
                  fullWidth
                  value={values.material}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" variant="contained" color="primary">
                  {t("contacts.sendButton")}
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={saveTask}>Save</Button> */}
          <Button onClick={handleClose}>{t("common.cancel")}</Button>
        </DialogActions>
      </Dialog>
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
    </>
  );
};

export default HomeQuestion;
