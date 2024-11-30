import React from "react";
import { Pie } from "react-chartjs-2";

const RepaymentChart = ({ loanAmount, totalInterest }) => {
  const data = {
    labels: ["Основная сумма", "Проценты"],
    datasets: [
      {
        label: "Распределение платежей",
        data: [loanAmount, totalInterest],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  return (
    <div>
      <h3>График погашения</h3>
      <Pie data={data} />
    </div>
  );
};

export default RepaymentChart;
