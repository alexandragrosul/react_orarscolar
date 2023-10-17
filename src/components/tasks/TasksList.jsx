import * as React from "react";

import {
  List,
  ListItem,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
  Container,
  Typography,
} from "../../../node_modules/@mui/material/index";
import DeleteIcon from "@mui/icons-material/Delete";

export const TasksList = () => {
  const [checked, setChecked] = React.useState([0]);

  //   const handleToggle = (value) => () => {
  //     const currentIndex = checked.indexOf(value);
  //     const newChecked = [...checked];

  //     if (currentIndex === -1) {
  //       newChecked.push(value);
  //     } else {
  //       newChecked.splice(currentIndex, 1);
  //     }

  //     setChecked(newChecked);
  //   };

  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const handleToggle = (taskId) => () => {
    const restTasks = [];
    let currentTask = null;
    tasks.forEach((element) => {
      if (element.id === taskId) {
        restTasks.push({ ...element, status: !element.status });
      } else {
        restTasks.push(element);
      }
    });
    setTasks(restTasks);
  };

  //   window.addEventListener("storage", (e) => {
  //     if (e.key === "tasks") {
  //       console.log(e.key);
  //       // Обработайте изменение данных, если необходимо
  //       setTasks(JSON.parse(localStorage.getItem("tasks")));
  //     }
  //   });

  //   React.useEffect(() => {
  //     // Обновите данные в localStorage при изменении состояния
  //     localStorage.setItem("tasks", tasks);
  //   }, [tasks]);
  return (
    <Container
      sx={{
        background: "linear-gradient(180deg, #d7e8d2, #59a96a)",
        height: "100vh",
      }}
    >
      <Typography variant="h4" component="h1" pt="3">
        Lista de taskuri
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {tasks.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value.id}
              secondaryAction={
                <IconButton edge="end" aria-label="delete" color="secondary">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value.id)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={value.status}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
