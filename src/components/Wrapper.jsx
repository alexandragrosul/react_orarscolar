import Header from "./layout/Header";
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
