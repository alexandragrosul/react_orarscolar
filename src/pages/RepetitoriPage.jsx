import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Repetitori from "../components/Repetitori";
const RepetitoriPage = () => {
  return (
    <>
      <Container fixed>
        <Box sx={{ height: "100vh" }}>
          <Repetitori />
          {/* <Chip label={material} /> */}
          {/* <Typography variant="body1">Pret: {price}</Typography> */}
        </Box>
      </Container>
    </>
  );
};

export default RepetitoriPage;
