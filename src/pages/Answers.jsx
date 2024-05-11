import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Container,
  Grid,
  Typography,
} from "../../node_modules/@mui/material/index";

const Answers = () => {
  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    fetch(
      "https://escoala-7b63b-default-rtdb.europe-west1.firebasedatabase.app/questions.json"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const arrayOfObjects = Object.keys(data)?.map((key) => ({
            id: key,
            question: data[key].question,
            material: data[key].material,
          }));

          setQuestions(arrayOfObjects);
        }
      })
      .catch((error) => {
        console.error("Error fetching coaches:", error);
      });
  }, []);

  console.log(questions);
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontFamily: "Arial, sans-serif", fontSize: "32px", mt: 5 }}
          >
            Answers
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {questions?.map((item) => {
              return (
                <ListItem key={item.id}>
                  <ListItemText
                    sx={{ borderColor: "primary" }}
                    primary={item.question}
                    secondary={item.material}
                  />
                </ListItem>
              );
            })}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Answers;
