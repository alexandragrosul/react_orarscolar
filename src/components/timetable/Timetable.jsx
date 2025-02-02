import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Container,
  CardContent,
  Card,
} from "../../../node_modules/@mui/material/index";
import scheduleDataDefault from "../../assets/schedule.json";
import quotes from "../../assets/quotes.json";
import PropTypes from "prop-types";
// import SwipeableViews from "react-swipeable-views";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import ImportSchedule from "./ImportSchedule";
import ExportSchedule from "./ExportSchedule";

function getFontColor(color) {
  // Определите яркость фона
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);

  // Рассчитайте яркость на основе яркостей R, G и B
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Выберите цвет текста в зависимости от яркости фона
  const textColor = brightness > 128 ? "black" : "white";

  return textColor;
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export const TimeTable = () => {
  const [dense] = React.useState(false);

  const disciplineTemp = {
    1: {
      id: 1,
      name: "Ora de baza I",
      bgColor: "pink",
      textColor: "white",
    },
    2: {
      id: 2,
      name: "Engleza",
      bgColor: "green",
      textColor: "black",
    },
    3: {
      id: 3,
      name: "Germana",
      bgColor: "darkBlue",
      textColor: "black",
    },
    4: {
      id: 4,
      name: "Limba romana",
      bgColor: "violet",
      textColor: "white",
    },
    5: {
      id: 5,
      name: "Informatica",
      bgColor: "pink",
      textColor: "white",
    },
    6: {
      id: 6,
      name: "Ed. PLastica",
      bgColor: "green",
      textColor: "white",
    },
    7: {
      id: 7,
      name: "Ed. Fizica",
      bgColor: "pink",
      textColor: "white",
    },
    8: {
      id: 8,
      name: "Fizica",
      bgColor: "darkBlue",
      textColor: "white",
    },
    9: {
      id: 9,
      name: "Instrument muzical",
      bgColor: "yellow",
      textColor: "white",
    },
    10: {
      id: 10,
      name: "Ora de baza II",
      bgColor: "yellow",
      textColor: "white",
    },
  };

  const weekLocalStorage = JSON.parse(localStorage.getItem("week"));
  // const weekLocalStorage = weekTemp;
  const colorsLocalStorage = localStorage.getItem("colors");
  // const disciplineLocalStorage = localStorage.getItem("discipline");
  const disciplineLocalStorage = disciplineTemp;

  // useEffect(() => {
  //   !disciplineLocalStorage &&
  //     localStorage.setItem(
  //       "discipline",
  //       JSON.stringify(scheduleDataDefault.discipline)
  //     );
  //   !colorsLocalStorage &&
  //     localStorage.setItem(
  //       "colors",
  //       JSON.stringify(scheduleDataDefault.colors)
  //     );
  //   !weekLocalStorage &&
  //     localStorage.setItem("week", JSON.stringify(scheduleDataDefault.week));
  // }, [disciplineLocalStorage, colorsLocalStorage, weekLocalStorage]);

  // Сохранение данных в локальное хранилище
  //   const saveDataToLocalStorage = (data) => {
  //     localStorage.setItem("scheduleData", JSON.stringify(data));
  //   };

  // Загрузка данных из локального хранилища
  //   const loadDataFromLocalStorage = () => {
  //     const data = localStorage.getItem("scheduleData");
  //     return data ? JSON.parse(data) : initialData;
  //   };

  const [week] = useState(
    // JSON.parse(weekLocalStorage) || scheduleDataDefault.week
    weekLocalStorage || scheduleDataDefault.week
  );
  const [colors] = useState(
    JSON.parse(colorsLocalStorage) || scheduleDataDefault.colors
  );
  const [discipline] = useState(
    // JSON.parse(disciplineLocalStorage) || scheduleDataDefault.discipline
    disciplineLocalStorage || scheduleDataDefault.discipline
  );

  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay(); // Возвращает номер дня недели (0 - воскресенье, 1 - понедельник, и так далее)
  const [value, setValue] = React.useState(currentDayOfWeek);

  const currentDayOrder = week.length ? week[value] : null;
  //   function getMonthName(date) {
  //     const months = [
  //       "January",
  //       "February",
  //       "March",
  //       "April",
  //       "May",
  //       "June",
  //       "July",
  //       "August",
  //       "September",
  //       "October",
  //       "November",
  //       "December",
  //     ];

  //     const currentMonth = date.getMonth(); // Возвращает номер месяца (0 - январь, 1 - февраль, и так далее)

  //     return months[currentMonth];
  //   }

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  }

  const theme = useTheme();
  //   const onlyWorkingDay = (day) => {
  //     switch (day) {
  //       case 0:
  //         return 1;
  //       case 1:
  //         return 1;
  //       case 2:
  //         return 2;
  //       case 3:
  //         return 3;
  //       case 4:
  //         return 4;
  //       case 5:
  //         return 5;
  //       case 6:
  //         return 1;
  //       default:
  //         return 1;
  //     }
  //   };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  // Function to select a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  // Call the function to get a random quote
  const randomQuote = getRandomQuote();

  const tabPanelContents = [
    "Luni",
    "Marti",
    "Miercuri",
    "Joi",
    "Vineri",
    "Sambata",
    "Duminica",
  ];

  return (
    <Container
      sx={{
        background: "linear-gradient(180deg, #d7e8d2, #59a96a)",
        height: "100vh",
        mt: 5,
      }}
    >
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          aria-label="full width tabs example"
          sx={{
            "& .MuiTab-root": {
              // Стиль для всех вкладок
              color: "black", // Цвет текста для невыбранных вкладок
              "&:hover": {
                // Цвет текста при наведении на вкладку
                color: "#a959a9",
              },
            },
            "& .Mui-selected": {
              // Цвет текста для выбранной вкладки
              color: "#a959a9 !important",
            },
            "& .MuiTabs-indicator": {
              // Цвет индикатора (линии под вкладкой)
              backgroundColor: "#a959a9",
            },
          }}
        >
          <Tab label="Luni" {...a11yProps(0)} />
          <Tab label="Marti" {...a11yProps(1)} />
          <Tab label="Miercuri" {...a11yProps(2)} />
          <Tab label="Joi" {...a11yProps(3)} />
          <Tab label="Vineri" {...a11yProps(4)} />
          <Tab label="Sambata" {...a11yProps(5)} />
          <Tab label="Duminica" {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabPanelContents?.map((day, index) => (
          <TabPanel
            value={value}
            index={index}
            dir={theme.direction}
            key={index}
          >
            {/* <Typography variant="h5" component={div} size="bold"> */}
            {day}
            {/* </Typography> */}
            {/* <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {day}
            </Typography> */}
            {currentDayOrder && currentDayOrder?.lessons?.length > 0 && (
              <List dense={dense}>
                {currentDayOrder.lessons?.map((item, i) => {
                  return (
                    <ListItem
                      key={i}
                      sx={{
                        backgroundColor: i % 2 === 0 ? "#a959a9" : "#59a96a",
                        // colors[discipline[item.subject].bgColor],
                        color: getFontColor(
                          colors[discipline[item.subject].bgColor]
                        ),
                        // color: discipline[item.subject].textColor,
                        borderRadius: "20px",
                        mb: 1,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                          marginRight: "30px",
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
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

                          <ListItemText
                            sx={{ my: 0, ml: 2 }}
                            primary={item.subject}
                            primaryTypographyProps={{
                              fontSize: 20,
                              fontWeight: "medium",
                              letterSpacing: 0,
                            }}
                          />
                        </Box>
                        <Box>
                          {item.timeStart && (
                            <>
                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <AlarmOnIcon />

                                <span
                                  style={{ height: "18.5px", display: "block" }}
                                >
                                  {item.timeStart}
                                </span>
                              </Box>
                              <br />
                            </>
                          )}
                          {item.timeEnd && (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                              <AlarmOffIcon />

                              <span
                                style={{ height: "18.5px", display: "block" }}
                              >
                                {item.timeEnd}
                              </span>
                            </Box>
                          )}
                        </Box>
                      </Box>
                    </ListItem>
                  );
                })}
              </List>
            )}
          </TabPanel>
        ))}
      </SwipeableViews>
      <Card>
        <ImportSchedule />
        <ExportSchedule />
      </Card>
      <Card>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Quote of the Day
          </Typography> */}

          <Typography variant="body2" fontWeight="bold" color="text.primary">
            {randomQuote.quote}
          </Typography>
          <Typography color="text.secondary">{randomQuote.author}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
