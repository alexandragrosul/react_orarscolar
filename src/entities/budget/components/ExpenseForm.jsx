import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category && amount) {
      onAddExpense({ category, amount: parseFloat(amount) });
      setCategory("");
      setAmount("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Добавить расход</h3>
      <input
        type="text"
        placeholder="Категория"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
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

export default ExpenseForm;
