import React, { useState } from "react";
import InvestmentForm from "./components/InvestmentForm";
import ResultTable from "./components/ResultTable";
import GrowthChart from "./components/GrowthChart";
import Recommendations from "./components/Recommendations";
import { calculateCompoundInterest } from "./utils/calculateCompoundInterest";

const ViewInvest = () => {
  const [results, setResults] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [mntContribution, setMntContribution] = useState(0);

  const handleFormSubmit = (data) => {
    const { initialAmount, monthlyContribution, annualRate, years } = data;
    setMntContribution(monthlyContribution);
    const scenarios = [
      { scenario: "Optimistic", rate: 10 },
      { scenario: "Average", rate: 5 },
      { scenario: "Pessimistic", rate: 2 },
    ];

    const calculatedResults = scenarios.map(({ scenario, rate }) => {
      const value = calculateCompoundInterest(
        Number(initialAmount),
        Number(monthlyContribution),
        rate,
        12,
        Number(years)
      );
      return { scenario, value };
    });

    setResults(calculatedResults);

    const growthData = Array.from({ length: years }, (_, i) => {
      return calculateCompoundInterest(
        Number(initialAmount),
        Number(monthlyContribution),
        annualRate,
        12,
        i + 1
      );
    });

    setChartData({
      years: Array.from({ length: years }, (_, i) => i + 1),
      values: growthData,
    });
  };

  return (
    <div>
      <h1>Investment Simulator</h1>
      <InvestmentForm onSubmit={handleFormSubmit} />
      {results.length > 0 && (
        <>
          <ResultTable results={results} />
          {chartData && <GrowthChart data={chartData} />}
          <Recommendations
            // monthlyContribution={results[1]?.value / Number(results[1]?.years)}
            monthlyContribution={mntContribution}
            annualRate={5}
            futureValue={results[1]?.value}
            years={results[1]?.years}
          />
        </>
      )}
    </div>
  );
};

export default ViewInvest;
