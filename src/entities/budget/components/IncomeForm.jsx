import React, { useState } from "react";

const IncomeForm = ({ onAddIncome }) => {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (source && amount) {
      onAddIncome({ source, amount: parseFloat(amount) });
      setSource("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Добавить доход</h3>
      <input
        type="text"
        placeholder="Источник дохода"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Сумма (MDL)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Добавить</button>
    </form>
  );
};

export default IncomeForm;
