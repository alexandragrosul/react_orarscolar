import * as React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from "../../node_modules/@mui/material/index";
import { TimeTable } from "./timetable/Timetable";
import { TasksList } from "./tasks/TasksList";

const Wrapper = () => {
  const [open, setOpen] = React.useState(false);
  const [dialogType, setDialogType] = React.useState(null);

  const handleClickOpen = (type) => {
    setDialogType(type === dialogType ? null : type);
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderMainContent = () => {
    console.count("ren");
    switch (dialogType) {
      case "schedule":
        return <TimeTable />;
      case "tasks":
        return <TasksList />;
      default:
        return <Outlet />;
    }
  };

  const renderDialogContent = () => {
    switch (dialogType) {
      case "schedule":
        return <TimeTable />;
      case "tasks":
        return (
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
        );
      default:
        return <Outlet />;
    }
  };

  return (
    <>
      <Header />
      <Box sx={{ height: "100vh", mt: 5 }}>{renderMainContent()}</Box>
      <Footer onButtonClick={handleClickOpen} />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adauga</DialogTitle>
        {renderDialogContent()}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Wrapper;
