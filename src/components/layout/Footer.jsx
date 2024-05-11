import React from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Toolbar,
} from "../../../node_modules/@mui/material/index";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Link } from "react-router-dom";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

function Footer({ onButtonClick, selected }) {
  const [open, setOpen] = React.useState(false);
  const [taskName, setTaskName] = React.useState("");
  // const handleClickOpen = () => {
  //   onButtonClick("schedule");
  // };

  const handleClickOpen = onButtonClick.bind(null, "schedule");

  const handleClickAddTaskOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const saveTask = () => {
    const existingTasks = JSON.parse(localStorage.getItem("tasks"));
    const payLoad = {
      name: taskName,
      id: new Date().valueOf(),
      status: false,
    };
    if (existingTasks) {
      existingTasks.push(payLoad);
      localStorage.setItem("tasks", JSON.stringify(existingTasks));
    } else {
      localStorage.setItem("tasks", JSON.stringify([payLoad]));
    }
    setTaskName("");
  };
  return (
    <Container sx={{ boxSizing: "unset", px: 0 }}>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton
            color={selected === "schedule" ? "secondary" : "black"}
            aria-label="open drawer"
            onClick={handleClickOpen}
          >
            <ViewListIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon onClick={handleClickAddTaskOpen} />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <Link to={"tasks"}>
            <IconButton color={selected === "tasks" ? "secondary" : "black"}>
              <PlaylistAddCheckIcon />
            </IconButton>
          </Link>
        </Toolbar>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Add the task</DialogTitle>
          <DialogContent>
            <DialogContentText>Add the task for homework</DialogContentText>
            <TextField
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
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={saveTask}>Save</Button>
            <Button onClick={handleClose}>Cancel</Button>
          </DialogActions>
        </Dialog>
      </AppBar>
    </Container>
  );
}

export default Footer;
