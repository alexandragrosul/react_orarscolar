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
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "../../../node_modules/@mui/material/index";

export const TasksList = () => {
  const [tasks, setTasks] = React.useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const handleToggle = (taskId) => () => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    console.log(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  // React.useEffect(() => {
  //   const handleStorageChange = (event) => {
  //     if (event.key === "tasks") {
  //       setTasks(JSON.parse(event.newValue));
  //     }
  //   };
  //   window.addEventListener("storage", handleStorageChange);
  //   console.log("Storage changed");
  //   return () => window.removeEventListener("storage", handleStorageChange);
  // }, []);

  React.useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "tasks") {
        setTasks(JSON.parse(event.newValue));
      }
    };

    const handleTasksUpdated = () => {
      setTasks(JSON.parse(localStorage.getItem("tasks")) || []);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("tasksUpdated", handleTasksUpdated);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("tasksUpdated", handleTasksUpdated);
    };
  }, []);

  return (
    <Container
      sx={{
        background: "linear-gradient(180deg, #d7e8d2, #59a96a)",
        height: "100vh",
        mt: 5,
      }}
    >
      <Typography variant="h4" component="h1" pt="3" sx={{ pt: 2 }}>
        Lista de taskuri
      </Typography>

      <List sx={{ width: "100%", maxWidth: 360 }}>
        {tasks.map((task) => {
          const labelId = `checkbox-list-label-${task.id}`;
          return (
            <ListItem
              key={task.id}
              sx={{
                borderRadius: "50px",
                bgcolor: "background.paper",
                my: 2,
              }}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  style={{ color: "#a959a9" }}
                  onClick={() => removeTask(task.id)}
                >
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={handleToggle(task.id)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={task.status}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <span
                    style={{
                      display: "block",
                      color: "gray",
                      fontSize: "12px",
                    }}
                  >
                    {task.time}
                  </span>
                  <ListItemText
                    id={labelId}
                    sx={{ textDecoration: task.status && "line-through" }}
                    primary={`${task.name}`}
                  />
                </Box>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Container>
  );
};
