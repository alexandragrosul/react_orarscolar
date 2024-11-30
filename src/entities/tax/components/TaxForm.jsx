import React, { useState } from "react";

const TaxForm = ({ onCalculate }) => {
  const [income, setIncome] = useState("");
  const [incomeType, setIncomeType] = useState("salary");
  const [country, setCountry] = useState("Moldova");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (income) {
      onCalculate({
        income: parseFloat(income),
        incomeType,
        country,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Налоговый калькулятор</h3>
      <label>
        Тип дохода:
        <select
          value={incomeType}
          onChange={(e) => setIncomeType(e.target.value)}
        >
          <option value="salary">Зарплата</option>
          <option value="business">Доход от бизнеса</option>
          <option value="investments">Инвестиции</option>
        </select>
      </label>
      <label>
        Сумма дохода (MDL):
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          required
        />
      </label>
      <label>
        Страна:
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="Moldova">Молдова</option>
          <option value="USA">США</option>
          <option value="Germany">Германия</option>
        </select>
      </label>
      <button type="submit">Рассчитать</button>
    </form>
  );
};

export default TaxForm;
