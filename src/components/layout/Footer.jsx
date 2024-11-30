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
import { styled } from "@mui/material/styles";
import Fab from "@mui/material/Fab";
import ViewListIcon from "@mui/icons-material/ViewList";
import { Link } from "react-router-dom";
import { useLocation } from "../../../node_modules/react-router-dom/dist/index";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { useFormik } from "formik";
import * as Yup from "yup";
import LessonSelect from "../timetable/LessonSelect";
import RoundButton from "./RoundButton";

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

const validationSchema = Yup.object({
  lessonName: Yup.string().required("Название обязательно"),
  lessonTimeStart: Yup.string().required("Время начала обязательно"),
  lessonTimeEnd: Yup.string()
    .nullable()
    .when("lessonTimeStart", (lessonTimeStart, schema) => {
      return schema.test({
        test: (lessonTimeEnd) => {
          if (!lessonTimeEnd) return true; // End time is not required
          return lessonTimeEnd > lessonTimeStart;
        },
        message: "Конец урока должен быть позже начала",
      });
    }),
});

function Footer({ onButtonClick, selected }) {
  const formik = useFormik({
    initialValues: {
      lessonName: "",
      lessonTimeStart: "",
      lessonTimeEnd: "",
    },
    validationSchema: validationSchema,
    onSubmit: (lesson) => {
      const lessons = JSON.parse(localStorage.getItem("lessons")) || [];
      if (Array.isArray(lessons)) {
        lessons.push(lesson);
        localStorage.setItem("lessons", JSON.stringify(lessons));
      } else {
        console.log("Проверьте ключь lessons");
      }
      setOpenTimetableForm(false);
    },
  });
  const [open, setOpen] = useState(false);
  const [openTimetableForm, setOpenTimetableForm] = useState(false);
  // const [lessonTimeStart] = useState("");
  // const [lessonTimeEnd] = useState("");
  const [taskName, setTaskName] = useState("");
  // const [lessonName] = useState("");
  const [time, setTime] = useState("");
  const [setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const location = useLocation();
  const isTimetablePage = location.pathname === "/timetable";
  // const isTasksListPage = location.pathname === "/tasks";
  const timetableLink = isTimetablePage ? "#" : "timetable";

  const handleClickOpen = onButtonClick.bind(null, "schedule");

  const handleClickAddTaskOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseTimetable = () => {
    setOpenTimetableForm(false);
  };

  const addNewTimetableItem = () => {
    console.log("addNewTimetableItem");
    setOpenTimetableForm(true);
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

  // const saveLesson = () => {
  //   const newLesson = {
  //     name: lessonName,
  //     timeStart: lessonTimeStart,
  //     timeEnd: lessonTimeEnd,
  //   };
  //   localStorage.setItem("lesson", JSON.stringify(newLesson));
  //   console.log(newLesson);

  //   // const updatedTasks = [
  //   //   ...JSON.parse(localStorage.getItem("tasks")),
  //   //   newTask,
  //   // ];
  //   // setTasks(updatedTasks);
  //   // localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  //   // // Вызов пользовательского события
  //   // window.dispatchEvent(new CustomEvent("tasksUpdated"));
  //   // setTaskName("");
  //   // setTime("");
  //   // setOpen(false);
  // };

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
            onClick={
              isTimetablePage ? addNewTimetableItem : handleClickAddTaskOpen
            }
          >
            {/* <AddIcon /> */}
            {isTimetablePage ? <PlaylistAddIcon /> : <AddTaskIcon />}
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

        {/* <Dialog open={openTimetableForm} onClose={handleCloseTimetable}>
          <DialogTitle>Add lesson</DialogTitle>
          <DialogContent>
            <DialogContentText>Add lesson</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="lesson_name"
              label="Denumirea lectiei"
              type="text"
              fullWidth
              variant="standard"
              value={lessonName}
              onChange={(event) => {
                setLessonName(event.target.value);
              }}
            />
            <TextField
              onChange={(event) => {
                setLessonTimeStart(event.target.value);
              }}
              value={lessonTimeStart}
              id="time"
              label="Time start"
              type="time"
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
              sx={{ width: "100%", mt: 2, borderRadius: "50px" }}
            />

            <TextField
              onChange={(event) => {
                setLessonTimeEnd(event.target.value);
              }}
              value={lessonTimeEnd}
              label="Time end"
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
            <Button onClick={saveLesson}>Save</Button>
            <Button onClick={handleCloseTimetable}>Cancel</Button>
          </DialogActions>
        </Dialog> */}

        <Dialog open={openTimetableForm} onClose={handleCloseTimetable}>
          <DialogTitle>Add lesson</DialogTitle>
          <DialogContent>
            <DialogContentText>Add lesson</DialogContentText>
            <form onSubmit={formik.handleSubmit}>
              <LessonSelect />
              <TextField
                autoFocus
                margin="dense"
                id="lesson_name"
                label="Denumirea lectiei"
                type="text"
                fullWidth
                variant="standard"
                {...formik.getFieldProps("lessonName")}
                error={
                  formik.touched.lessonName && Boolean(formik.errors.lessonName)
                }
                helperText={
                  formik.touched.lessonName && formik.errors.lessonName
                }
              />
              <TextField
                id="time_start"
                label="Time start"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                fullWidth
                sx={{ mt: 2, borderRadius: "50px" }}
                {...formik.getFieldProps("lessonTimeStart")}
                error={
                  formik.touched.lessonTimeStart &&
                  Boolean(formik.errors.lessonTimeStart)
                }
                helperText={
                  formik.touched.lessonTimeStart &&
                  formik.errors.lessonTimeStart
                }
              />
              <TextField
                id="time_end"
                label="Time end"
                type="time"
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
                fullWidth
                sx={{ mt: 2, borderRadius: "50px" }}
                {...formik.getFieldProps("lessonTimeEnd")}
                error={
                  formik.touched.lessonTimeEnd &&
                  Boolean(formik.errors.lessonTimeEnd)
                }
                helperText={
                  formik.touched.lessonTimeEnd && formik.errors.lessonTimeEnd
                }
              />
              <DialogActions>
                {/* <Button type="submit" variant="contained">
                  Save
                </Button> */}
                <RoundButton
                  type="submit"
                  name="Save"
                  style={{ color: "white" }}
                />
                <Button onClick={handleCloseTimetable}>Cancel</Button>
              </DialogActions>
            </form>
          </DialogContent>
        </Dialog>
      </AppBar>
    </Container>
  );
}

export default Footer;
