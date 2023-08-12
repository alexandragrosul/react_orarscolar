import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const Wrapper = () => {
  return (
    <>
      <Header />
      <Box sx={{ height: "100vh" }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Wrapper;
