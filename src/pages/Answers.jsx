import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
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
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  );
};
export default Answers;
