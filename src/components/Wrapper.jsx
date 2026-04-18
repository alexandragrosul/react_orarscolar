import * as React from "react";
import Header from "./layout/Header";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Outlet, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  Paper,
} from "@mui/material";

import { TimeTable } from "./timetable/Timetable";

const Wrapper = () => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const [pageType, setPageType] = React.useState(null);
  const [appBarPosition, setAppBarPosition] = React.useState("fixed");

  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    if (pageType === "schedule" || pageType === "tasks") {
      setAppBarPosition("sticky");
    } else {
      setAppBarPosition("fixed");
    }
  }, [pageType]);

  React.useEffect(() => {
    setPageType(null);
  }, [location.pathname]);

  const renderDialogContent = () => {
    switch (pageType) {
      case "schedule":
        return <TimeTable />;
      case "tasks":
        return (
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
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
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: `
          radial-gradient(circle at 10% 10%, rgba(110,200,114,0.18), transparent 35%),
          radial-gradient(circle at 90% 20%, rgba(76,175,80,0.12), transparent 40%),
          radial-gradient(circle at 50% 100%, rgba(63,203,109,0.08), transparent 45%),
          linear-gradient(180deg, #f6fff7 0%, #eefaf0 100%)
        `,
      }}
    >
      {/* HEADER */}
      <Header position={appBarPosition} handleClose={handleClose} />

      {/* CONTENT */}
      <Box
        sx={{
          flex: 1,
          pt: appBarPosition === "fixed" ? "64px" : 0,
          px: 0,
          pb: 0,
        }}
      >
        <Outlet />
      </Box>

      {/* FOOTER (WOW GLASS STYLE) */}
      <Paper
        elevation={0}
        sx={{
          mt: "auto",
          py: 4,
          px: 2,
          textAlign: "center",
          background: "rgba(255,255,255,0.6)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(76,175,80,0.15)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* glow effect */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 0%, rgba(110,200,114,0.25), transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <Typography
          sx={{
            fontSize: { xs: "13px", md: "14px" },
            color: "rgba(0,0,0,0.65)",
            fontWeight: 500,
            position: "relative",
          }}
        >
          © 2024 Escoala.md · All Rights Reserved · Built with ❤️ for education
        </Typography>
      </Paper>

      {/* DIALOG */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            borderRadius: "18px",
            padding: 1,
          },
        }}
      >
        <DialogTitle sx={{ fontWeight: 700 }}>Adaugă</DialogTitle>

        {renderDialogContent()}

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(135deg, #6EC872, #499f4d)",
            }}
            onClick={handleClose}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Wrapper;
