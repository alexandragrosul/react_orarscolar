import React from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "../../../node_modules/@mui/material/index";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";

const colors = [
  "red",
  "purple",
  "yellow",
  "green",
  "blue",
  "orange",
  "pink",
  "brown",
  "teal",
  "gray",
];
const schedule = ["Математика", "Русский", "Английский"];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export const TimeTable = () => {
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);

  return (
    <Grid item xs={12} md={6}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        Avatar with text and icon
      </Typography>
      <List dense={dense}>
        {schedule.map((item) => {
          return (
            <ListItem
              key={item}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              sx={{ 
                backgroundColor:getRandomColor(),
               }}
            >
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={item + ' ' + '8:30 - 12:00'}
                secondary={secondary ? "Secondary text" : null}
              />
            </ListItem>
          );
        })}
      </List>
    </Grid>
  );
};
