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

const HomeQuestion = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = React.useState("");
  const handleClickQuestionOpen = () => {
    setOpen(true);
  };

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
          <TextField
            autoFocus
            margin="dense"
            id="task_name"
            type="text"
            fullWidth
            variant="standard"
            value={question}
            onChange={(event) => {
              setQuestion(event.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={saveTask}>Save</Button> */}
          <Button onClick={handleClose}>{t("common.cancel")}</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HomeQuestion;
