import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  List,
  ListItem,
  IconButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Stack,
  Container,
} from "../../../node_modules/@mui/material/index";
import DeleteIcon from "@mui/icons-material/Delete";
import scheduleDataDefault from "../../assets/schedule.json";

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

// function getRandomColor() {
//   const randomIndex = Math.floor(Math.random() * colors.length);
//   return colors[randomIndex];
// }
function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  const bgColor = colors[randomIndex];

  // Определите яркость фона
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);

  // Рассчитайте яркость на основе яркостей R, G и B
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Выберите цвет текста в зависимости от яркости фона
  const textColor = brightness > 128 ? "black" : "white";

  return { bgColor, textColor };
}

export const TimeTable = () => {
  const [dense] = React.useState(false);

  // Сохранение данных в локальное хранилище
  //   const saveDataToLocalStorage = (data) => {
  //     localStorage.setItem("scheduleData", JSON.stringify(data));
  //   };

  // Загрузка данных из локального хранилища
  //   const loadDataFromLocalStorage = () => {
  //     const data = localStorage.getItem("scheduleData");
  //     return data ? JSON.parse(data) : initialData;
  //   };

  const [week, setWeek] = useState(
    JSON.parse(localStorage.getItem("week")) || scheduleDataDefault.week
  );
  const [colors, setColors] = useState(
    JSON.parse(localStorage.getItem("colors")) || scheduleDataDefault.colors
  );
  const [discipline, setDiscipline] = useState(
    JSON.parse(localStorage.getItem("discipline")) ||
      scheduleDataDefault.discipline
  );

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay(); // Возвращает номер дня недели (0 - воскресенье, 1 - понедельник, и так далее)

  const currentDayOrder = week.length ? week[currentDayOfWeek - 1] : null;

  function getMonthName(date) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentMonth = date.getMonth(); // Возвращает номер месяца (0 - январь, 1 - февраль, и так далее)

    return months[currentMonth];
  }

  //   useEffect(() => {
  //     localStorage.setItem("tasks", JSON.stringify(scheduleData.tasks));
  //     localStorage.setItem("discipline", JSON.stringify(scheduleData.discipline));
  //     localStorage.setItem("colors", JSON.stringify(scheduleData.colors));
  //     localStorage.setItem("week", JSON.stringify(scheduleData.week));
  //   }, []);
  return (
    <Container>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h5" component="h1" size="bold">
            {currentDayOrder.day}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <Typography variant="h6" component="h1" size="bold">
              {currentDate.getDate()}
            </Typography>
            <Typography variant="body1" component="p" size="bold">
              {getMonthName(currentDate)}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <List dense={dense}>
            {currentDayOrder &&
              currentDayOrder?.lessons?.length > 0 &&
              currentDayOrder.lessons?.map((item, i) => {
                return (
                  <ListItem
                    key={i}
                    //   secondaryAction={
                    //     <IconButton edge="end" aria-label="delete">
                    //       <DeleteIcon />
                    //     </IconButton>
                    //   }
                    sx={{
                      backgroundColor: colors[discipline[item.subject].bgColor],
                      color: discipline[item.subject].textColor,
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar
                        sx={{
                          color: "primary.main",
                          backgroundColor: "white",
                          fontWeight: "bold",
                        }}
                      >
                        {i + 1}
                      </Avatar>
                    </ListItemAvatar>
                    {/* <ListItemText
                    sx={{ color: randomColor.textColor }}
                    primary={`${item.time}/n12:00"`}
                  />
                  <ListItemText
                    sx={{ color: randomColor.textColor }}
                    primary={`${item.time}- 12:00"`}
                    secondary={item.subject}
                  /> */}
                    {/* <ListItemText primary="Work" secondary="Jan 7, 2014" /> */}
                    {item.timeStart}
                    <br />
                    {item.timeEnd}
                    <ListItemText
                      sx={{ my: 0, ml: 2 }}
                      primary={discipline[item.subject].name}
                      primaryTypographyProps={{
                        fontSize: 20,
                        fontWeight: "medium",
                        letterSpacing: 0,
                      }}
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
