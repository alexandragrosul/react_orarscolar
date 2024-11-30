import React, { useState } from "react";

const LoanForm = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loanAmount && interestRate && loanTerm) {
      onCalculate({
        loanAmount: parseFloat(loanAmount),
        interestRate: parseFloat(interestRate),
        loanTerm: parseInt(loanTerm),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Калькулятор кредита</h3>
      <label>
        Сумма кредита (MDL):
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
      </label>
      <label>
        Годовая процентная ставка (%):
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          required
        />
      </label>
      <label>
        Срок кредита (в месяцах):
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          required
        />
      </label>
      <button type="submit">Рассчитать</button>
    </form>
  );
};

export default LoanForm;
