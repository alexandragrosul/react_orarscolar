import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Repetitor({ profesors }) {
  const { id } = useParams();
  const [profesor, setProfesor] = useState(null);
  useEffect(() => {
    const item = profesors.find((el) => el.id == id);
    setProfesor(item);
    console.log(item);
  }, []);
  return (
    <Container
      sx={{
        padding: "20px 0",
      }}
    >
      <Box>
        <Grid container>
          <Grid item xs={4}>
            <Avatar
              sx={{
                width: 180,
                height: 180,
              }}
              src="https://picsum.photos/180/180"
            />
          </Grid>

          <Grid item xs={8}>
            <Box>
              <Typography variant="h3">{profesor?.name}</Typography>
              <Typography variant="p">{profesor?.city}</Typography>
              <Typography variant="p">{profesor?.phone}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Repetitor;
