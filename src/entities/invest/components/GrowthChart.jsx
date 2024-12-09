import React, { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const GrowthChart = ({ data }) => {
  const chartRef = useRef(null); // Reference to canvas
  const chartInstanceRef = useRef(null); // Reference to the chart instance

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy old chart if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart
    chartInstanceRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.years,
        datasets: [
          {
            label: "Capital Growth",
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

    // Clean up the resource on component unmount
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [data]); // Redraw chart if data changes

  return <canvas ref={chartRef}></canvas>;
};

export default GrowthChart;
