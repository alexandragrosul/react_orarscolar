import React, { useState } from "react";
import TaxForm from "./components/TaxForm";
import TaxResult from "./components/TaxResult";
import TaxDistributionChart from "./components/TaxDistributionChart";
import TaxTips from "./components/TaxTips";
import { calculateTax } from "./utils/taxCalculations";

const ViewTax = () => {
  const [results, setResults] = useState(null);

  const handleCalculate = ({ income, incomeType, country }) => {
    const { taxAmount, netIncome, taxRate } = calculateTax(
      income,
      incomeType,
      country
    );
    setResults({ taxAmount, netIncome, taxRate });
  };

  return (
    <div>
      <h1>Налоговый калькулятор</h1>
      <TaxForm onCalculate={handleCalculate} />
      {results && (
        <>
          <TaxResult
            taxAmount={results.taxAmount}
            netIncome={results.netIncome}
            taxRate={results.taxRate}
          />
          <TaxDistributionChart
            taxAmount={results.taxAmount}
            netIncome={results.netIncome}
          />
          <TaxTips taxRate={results.taxRate} />
        </>
      )}
    </div>
  );
};

export default ViewTax;
