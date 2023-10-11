import React from "react";
import {
  AppBar,
  Box,
  Button,
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

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

function Footer({ onButtonClick }) {
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   onButtonClick("schedule");
  // };

  const handleClickOpen = onButtonClick.bind(null, "schedule");

  const handleClickAddTaskOpen = () => {
    onButtonClick("addTask");
  };
  const handleClickTasskOpen = () => {
    onButtonClick("tasks");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleClickOpen}
        >
          <ViewListIcon />
        </IconButton>
        <StyledFab color="secondary" aria-label="add">
          <AddIcon onClick={handleClickAddTaskOpen} />
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <PlaylistAddCheckIcon onClick={handleClickTasskOpen} />
        </IconButton>
      </Toolbar>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add the task</DialogTitle>
        <DialogContent>
          <DialogContentText>Add the task for homework</DialogContentText>
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
        <DialogActions>
          <Button onClick={handleClose}>Save</Button>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default Footer;
