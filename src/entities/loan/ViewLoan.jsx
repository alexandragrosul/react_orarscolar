import React, { useState } from "react";
import LoanForm from "./components/LoanForm";
import PaymentSummary from "./components/PaymentSummary";
import RepaymentChart from "./components/RepaymentChart";
import Recommendations from "./components/Recommendations";
import { calculateAnnuityPayment } from "./components/loanCalculations";

const ViewLoan = () => {
  const [results, setResults] = useState(null);

  const handleCalculate = ({ loanAmount, interestRate, loanTerm }) => {
    const { monthlyPayment, totalPayment, totalInterest } =
      calculateAnnuityPayment(loanAmount, interestRate, loanTerm);

    setResults({ loanAmount, monthlyPayment, totalPayment, totalInterest });
  };

  return (
    <div>
      <h1>Калькулятор кредита</h1>
      <LoanForm onCalculate={handleCalculate} />
      {results && (
        <>
          <PaymentSummary
            monthlyPayment={results.monthlyPayment}
            totalPayment={results.totalPayment}
            totalInterest={results.totalInterest}
          />
          <RepaymentChart
            loanAmount={results.loanAmount}
            totalInterest={results.totalInterest}
          />
          <Recommendations
            totalInterest={results.totalInterest}
            loanAmount={results.loanAmount}
          />
        </>
      )}
    </div>
  );
};

export default ViewLoan;
