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
} from "../../../node_modules/@mui/material/index";
import DeleteIcon from "@mui/icons-material/Delete";

export const TasksList = () => {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [tasks] = React.useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  //   window.addEventListener("storage", (e) => {
  //     if (e.key === "tasks") {
  //       // Обработайте изменение данных, если необходимо
  //       setTasks(JSON.parse(localStorage.getItem("tasks")));
  //     }
  //   });

  //   React.useEffect(() => {
  //     // Обновите данные в localStorage при изменении состояния
  //     localStorage.setItem("tasks", tasks);
  //   }, [tasks]);

  return (
    <Container>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {tasks.map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
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
                <ListItemText
                  id={labelId}
                  primary={`Line item ${value.name}`}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
