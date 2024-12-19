import React, { useEffect, useState } from "react";
import { Paper, Typography, Button } from "@mui/material";

const EventCard = ({ stage, updateBalance, year, age }) => {
  const [event, setEvent] = useState(null);

  // Определяем случайные события для каждого этапа
  const events = {
    Student: [
      { description: "You received a scholarship! (+200 MDL)", value: 200 },
      { description: "You lost your textbook! (-100 MDL)", value: -100 },
    ],
    Professional: [
      { description: "You got a salary bonus! (+3000 MDL)", value: 3000 },
      { description: "Your car broke down! (-1500 MDL)", value: -1500 },
    ],
    Investor: [
      { description: "Stock market boom! (+5000 MDL)", value: 5000 },
      { description: "Stock market crash! (-2000 MDL)", value: -2000 },
    ],
  };

  const decisions = {
    Child: [
      { label: "Save pocket money (+100 MDL)", value: 100, progress: 2 },
      { label: "Buy a book (-150 MDL)", value: -50, progress: 1 },
    ],
    Worker: [
      { label: "Invest in Stocks (+5000 MDL)", value: 5000, progress: 15 },
      { label: "Buy a car (-10000 MDL)", value: -10000, progress: 10 },
    ],
    Retiree: [
      { label: "Spend on Travel (-3000 MDL)", value: -3000, progress: 5 },
      { label: "Reinvest Dividends (+2000 MDL)", value: 2000, progress: 10 },
    ],
  };

  const getDecisions = () => {
    if (age < 18) return decisions.Child;
    if (age >= 18 && age <= 63) return decisions.Worker;
    return decisions.Retiree;
  };

  // const renderDecisions = getDecisions().map((decision, index) => (
  //   <button key={index} onClick={() => handleDecision(decision)}>
  //     {decision.label}
  //   </button>
  // ));

  // Генерация случайного события
  const generateRandomEvent = () => {
    const stageEvents = events[stage];
    const randomEvent =
      stageEvents[Math.floor(Math.random() * stageEvents.length)];
    setEvent(randomEvent);
    updateBalance(randomEvent.value); // Обновляем баланс
  };

  useEffect(() => {
    generateRandomEvent();
  }, [year]); // Генерируем событие при изменении стадии

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" align="center">
        Random Event
      </Typography>
      {event && (
        <>
          <Typography variant="body1" align="center" gutterBottom>
            {event.description}
          </Typography>
          {/* <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={generateRandomEvent}
          >
            Trigger Another Event
          </Button> */}
        </>
      )}
    </Paper>
  );
};

export default EventCard;
