import React from "react";

const BudgetSummary = ({ incomes, expenses }) => {
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );
  const balance = totalIncome - totalExpenses;
  const expensePercentage =
    totalIncome > 0 ? (totalExpenses / totalIncome) * 100 : 0;

  return (
    <div>
      <h3>Сводка бюджета</h3>
      <p>Общий доход: {totalIncome.toFixed(2)} MDL</p>
      <p>Общий расход: {totalExpenses.toFixed(2)} MDL</p>
      <p>Остаток бюджета: {balance.toFixed(2)} MDL</p>
      <p>Расходы составляют: {expensePercentage.toFixed(2)}%</p>
    </div>
  );
};

export default BudgetSummary;
