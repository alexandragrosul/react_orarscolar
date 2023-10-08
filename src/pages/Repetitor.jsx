import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function Repetitor() {
  const { id } = useParams();
  const [profesor, setProfesor] = useState(null);
  useEffect(() => {
    fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/coaches.json"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const arrayOfObjects = Object.keys(data).map((key) => ({
            id: key,
            city: data[key].city,
            languages: data[key].languages,
            material: data[key].material,
            name: data[key].name,
            phone: data[key].phone,
          }));
          setProfesor(arrayOfObjects.find((prof) => prof.id === id));
        }
      })
      .catch((error) => {
        console.error("Error fetching coaches:", error);
      });
  }, [id]);
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
