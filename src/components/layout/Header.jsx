import React from "react";
import TopBar from "./TopBar";
import { Container } from "@mui/material";

function Header({ position, handleClose }) {
  return (
    <Container>
      <TopBar position={position} handleClose={handleClose} />
    </Container>
  );
}

export default Header;
