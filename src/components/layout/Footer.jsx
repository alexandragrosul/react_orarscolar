import React, { useState } from "react";
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
} from "@mui/material";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Link } from "react-router-dom";
import { useLocation } from "../../../node_modules/react-router-dom/dist/index";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

function Footer({ onButtonClick, selected }) {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const location = useLocation();
  const isTimetablePage = location.pathname === "/timetable";
  const timetableLink = isTimetablePage ? "#" : "timetable";

  const handleClickOpen = onButtonClick.bind(null, "schedule");

  const handleClickAddTaskOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveTask = () => {
    const newTask = {
      name: taskName,
      id: new Date().valueOf(),
      status: false,
      time: time,
    };
    const updatedTasks = [
      ...JSON.parse(localStorage.getItem("tasks")),
      newTask,
    ];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    // Вызов пользовательского события
    window.dispatchEvent(new CustomEvent("tasksUpdated"));
    setTaskName("");
    setTime("");
    setOpen(false);
  };

  console.log(timetableLink);
  return (
    <Container sx={{ boxSizing: "unset", px: 0 }}>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          {/* <Link to={timetableLink}>
            <IconButton
              color={selected === "schedule" ? "secondary" : "black"}
              aria-label="open drawer"
              onClick={handleClickOpen}
            >
              <ViewListIcon />
            </IconButton>
          </Link> */}

          {isTimetablePage ? (
            <IconButton
              color={selected === "schedule" ? "secondary" : "black"}
              aria-label="open drawer"
            >
              <ViewListIcon />
            </IconButton>
          ) : (
            <Link to={"timetable"}>
              <IconButton
                color={selected === "schedule" ? "secondary" : "black"}
                aria-label="open drawer"
                onClick={handleClickOpen}
              >
                <ViewListIcon />
              </IconButton>
            </Link>
          )}

          <StyledFab
            style={{ backgroundColor: "#a959a9", color: "#ffffff" }}
            aria-label="add"
            onClick={handleClickAddTaskOpen}
          >
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <Link to={"tasks"}>
            {/* color={selected === "tasks" ? "secondary" : "black"} */}
            <IconButton color={selected === "tasks" ? "secondary" : "black"}>
              {/* <IconButton style={{ color: "#a959a9" }} aria-label="add"> */}
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
            <TextField
              onChange={(event) => {
                setTime(event.target.value);
              }}
              value={time}
              id="time"
              label="Alarm clock"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: "100%", mt: 2, borderRadius: "50px" }}
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
