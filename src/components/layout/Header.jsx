import React from "react";
import TopBar from "./TopBar";
import { Container } from "@mui/material";

function Header({ position }) {
  return (
    <Container>
      <TopBar position={position} />
    </Container>
  );
}

export default Header;
