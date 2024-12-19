import * as React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
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
import { useLocation } from "react-router-dom";

const Wrapper = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const [pageType, setPageType] = React.useState(null);
  const [appBarPosition, setAppBarPosition] = React.useState("fixed");
  const [footerMenuSelected, setFooterMenuSelected] = React.useState(null);

  const handleClickOpen = (type) => {
    setPageType(type === pageType ? null : type);
    // setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const renderMainContent = () => {
  //   switch (pageType) {
  //     case "schedule":
  //       return <TimeTable />;
  //     case "tasks":
  //       return <TasksList />;
  //     default:
  //       return <Outlet />;
  //   }
  // };

  React.useEffect(() => {
    if (pageType === "schedule" || pageType === "tasks") {
      setAppBarPosition("sticky");
    } else {
      setAppBarPosition("fixed");
    }
    setFooterMenuSelected(pageType);
  }, [pageType]);

  const renderDialogContent = () => {
    switch (pageType) {
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

  React.useEffect(() => {
    // Code to execute when the route changes
    setPageType(null);

    // You can also use the history object to navigate programmatically
    // For example, you can use history.push('/new-route') to navigate to a different route
  }, [location.pathname]);

  return (
    <Box>
      <Header position={appBarPosition} handleClose={handleClose} />
      <Box
        sx={{
          height: "100vh",
          pt: appBarPosition === "fixed" ? 6 : 0,
          padding: "40px 0",
        }}
      >
        <Outlet />
        {/* {renderMainContent()} */}
        <Box
          sx={{ background: "#66bb6a", padding: "40px 0", textAlign: "center" }}
        >
          <Typography variant="h6" sx={{ color: "black" }}>
            © 2024 Escoala.md. All Rights Reserved. | Empowering education for a
            brighter future.
          </Typography>
        </Box>
      </Box>
      {/* <Footer onButtonClick={handleClickOpen} selected={footerMenuSelected} /> */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Adauga</DialogTitle>
        {renderDialogContent()}
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
      {/* Footer Section */}
    </Box>
  );
};

export default Wrapper;
