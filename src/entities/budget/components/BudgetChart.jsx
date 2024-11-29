import React from "react";
import { Pie } from "react-chartjs-2";

const BudgetChart = ({ expenses }) => {
  const data = {
    labels: expenses.map((expense) => expense.category),
    datasets: [
      {
        label: "Расходы",
        data: expenses.map((expense) => expense.amount),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div>
      <h3>Распределение расходов</h3>
      <Pie data={data} />
    </div>
  );
};

export default BudgetChart;
