import React from "react";
import { Line } from "react-chartjs-2";

const MarketChart = ({ price }) => {
  const prices = Array.from({ length: 20 }, (_, i) => i + 1);
  const demandData = prices.map((p) => Math.max(100 - p * 10, 0));
  const supplyData = prices.map((p) => Math.min(p * 10, 100));

  const data = {
    labels: prices,
    datasets: [
      {
        label: "Спрос",
        data: demandData,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Предложение",
        data: supplyData,
        borderColor: "rgba(255, 99, 132, 1)",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h3>График спроса и предложения</h3>
      <Line data={data} />
    </div>
  );
};

export default MarketChart;
