import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "../../node_modules/@mui/material/index";

const Answers = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem>
        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
      </ListItem>
    </List>
  );
};
export default Answers;
