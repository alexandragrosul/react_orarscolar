import React, { useState } from "react";
import IncomeForm from "./components/IncomeForm";
import ExpenseForm from "./components/ExpenseForm";
import BudgetSummary from "./components/BudgetSummary";
import Recommendations from "./components/Recommendations";
import BudgetChart from "./components/BudgetChart";

const ViewBudget = () => {
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addIncome = (income) => {
    setIncomes([...incomes, income]);
  };

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <h1>Калькулятор семейного бюджета (MDL)</h1>
      <IncomeForm onAddIncome={addIncome} />
      <ExpenseForm onAddExpense={addExpense} />
      <BudgetSummary incomes={incomes} expenses={expenses} />
      <Recommendations incomes={incomes} expenses={expenses} />
      {expenses.length > 0 && <BudgetChart expenses={expenses} />}
    </div>
  );
};

export default ViewBudget;
