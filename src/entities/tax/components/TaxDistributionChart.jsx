import React from "react";
import { Pie } from "react-chartjs-2";

const TaxDistributionChart = ({ taxAmount, netIncome }) => {
  const data = {
    labels: ["Налоги", "Чистый доход"],
    datasets: [
      {
        data: [taxAmount, netIncome],
        backgroundColor: ["#FF6384", "#36A2EB"],
      },
    ],
  };

  return (
    <div>
      <h3>Распределение доходов</h3>
      <Pie data={data} />
    </div>
  );
};

export default TaxDistributionChart;
