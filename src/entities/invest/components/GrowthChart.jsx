import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const GrowthChart = ({ data }) => {
  const chartRef = useRef(null); // Ссылка на canvas
  const chartInstanceRef = useRef(null); // Ссылка на экземпляр графика

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Уничтожаем старый график, если он существует
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Создаем новый график
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.years,
        datasets: [
          {
            label: "Рост капитала",
            data: data.values,
            borderColor: "rgba(75,192,192,1)",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: "top" },
        },
      },
    });

    // Очистка ресурса при размонтировании компонента
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]); // Перерисовываем график, если изменились данные

  return <canvas ref={chartRef}></canvas>;
};

export default GrowthChart;
