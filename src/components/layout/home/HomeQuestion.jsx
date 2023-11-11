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

const HomeQuestion = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickQuestionOpen = () => {
    setOpen(true);
  };
  //   const handleClickTasskOpen = () => {
  //     onButtonClick("tasks");
  //   };

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
        Ce vrei să ştii?
      </Typography>
      <RoundButton
        name="Pune intrebarea ta"
        style={{ color: "white" }}
        onClick={handleClickQuestionOpen}
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add the task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Întreabă ce nu ştii să faci din temă
          </DialogContentText>
          {/* <TextField
            autoFocus
            margin="dense"
            id="task_name"
            label="Denumirea taskului"
            type="text"
            fullWidth
            variant="standard"
            value={taskName}
            onChange={(event) => {
              setTaskName(event.target.value);
            }}
          /> */}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={saveTask}>Save</Button> */}
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default HomeQuestion;
