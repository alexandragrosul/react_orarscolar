import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import LifeStage from "./LifeStage";
import DecisionPanel from "./DecisionPanel";
import ProgressBar from "./ProgressBar";
import EventCard from "./EventCard";
import Leaderboard from "./LeaderBoard";

const Game = () => {
  const [stage, setStage] = useState("Student");
  const [balance, setBalance] = useState(1000); // Start with 1000 MDL
  const [goal] = useState(1000000); // Goal: 1,000,000 MDL
  const [progress, setProgress] = useState(0); // Progress percentage
  const [year, setYear] = useState(1);
  const [age, setAge] = useState(14);

  // const nextYear = () => {
  //   setYear((prev) => prev + 1);

  //   // Применяем последствия решений
  //   const yearlyIncome = 10000; // Базовый доход
  //   const yearlyExpenses = 5000; // Базовые расходы
  //   // if (stage === "Professional") {
  //   //   yearlyIncome += 5000; // Дополнительный доход
  //   //   yearlyExpenses += 10000; // Дополнительные расходы
  //   // }
  //   const netChange = yearlyIncome - yearlyExpenses;

  //   setBalance((prev) => prev + netChange);
  //   setProgress((prev) => prev + 5); // Примерный прогресс
  //   // handleRandomEvent();
  // };

  const nextYear = () => {
    setYear((prev) => prev + 1); // Увеличиваем год
    setAge((prev) => prev + 1); // Увеличиваем возраст

    let income = 0;
    let expenses = 400; // Базовые расходы

    if (age >= 18 && age <= 63) {
      income = 15000; // Зарплата
      expenses += 8000; // Дополнительные расходы на жизнь
    } else if (age > 63) {
      income = balance * 0.05; // Дивиденды от накоплений (5% от баланса)
      expenses += 7000; // Расходы пенсионера
    }

    const netChange = income - expenses;

    setBalance((prev) => {
      const newBalance = prev + netChange;
      // if (newBalance < 0) {
      //   alert("You're out of money! Game over.");
      //   setStage("GameOver");
      //   return 0; // Обнуляем баланс при банкротстве
      // }
      return newBalance;
    });

    setProgress((prev) => {
      console.log({ prev });
      // const newProgress = prev + 5; // Примерный прогресс
      const newProgress = prev + (netChange * 100) / goal;
      // prev.toFixed(2) + ((netChange * 100) / goal).toFixed(2);
      if (newProgress >= 100) {
        alert("Congratulations! You've achieved your financial goal!");
        setStage("GameComplete");
      }
      return newProgress;
    });

    // Случайные события каждый год
    // handleRandomEvent();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleEndGame = () => {
    if (stage === "Retirement") {
      alert(`Game over! Final Balance: ${balance} MDL. Progress: ${progress}%`);
    }
  };

  useEffect(() => {
    if (progress >= 100 || stage === "Retirement") {
      handleEndGame();
    }
  }, [handleEndGame, progress, stage]);
  const handleDecision = (amountChange, progressChange) => {
    setBalance((prev) => prev + amountChange);
    setProgress((prev) => Math.min(100, prev + progressChange));
    // if (progress + progressChange >= 100) {
    if (progress >= 100) {
      alert("Congratulations! You've reached your financial goal!");
    }
  };

  // const nextStage = () => {
  //   if (stage === "Student") setStage("Professional");
  //   else if (stage === "Professional") setStage("Investor");
  //   else if (stage === "Investor") setStage("Retirement");
  //   else alert("Congratulations! You've completed all stages of the game!");
  // };

  return (
    <Container sx={{ marginTop: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Financial Quest: Road to a Million
      </Typography>
      <h2>Age: {age}</h2>
      <h2>Year: {year}</h2>
      <h2>Balance: {Math.floor(balance)} MDL</h2>

      <Typography variant="h6" align="center">
        Current Stage: {stage}
      </Typography>
      <Typography variant="h6" align="center">
        Balance: {Math.floor(balance).toLocaleString()} MDL
      </Typography>
      <ProgressBar progress={Math.floor(progress)} />

      <LifeStage stage={stage} />

      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12} sm={6}>
          <EventCard
            stage={stage}
            updateBalance={(value) => setBalance((prev) => prev + value)}
            year={year}
            age={age}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <DecisionPanel onDecision={handleDecision} stage={stage} />
        </Grid>
      </Grid>

      {/* <Button
        variant="contained"
        color="primary"
        fullWidth
        sx={{ marginTop: 3 }}
        onClick={nextStage}
      >
        Next Stage
      </Button> */}
      <button onClick={nextYear}>Advance to Next Year</button>

      <Leaderboard />
    </Container>
  );
};

export default Game;
