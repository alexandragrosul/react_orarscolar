import React from "react";

const Recommendations = ({ incomes, expenses }) => {
  const totalIncome = incomes.reduce((sum, income) => sum + income.amount, 0);
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  if (totalExpenses / totalIncome > 0.7) {
    return (
      <p>
        Ваши расходы превышают 70% доходов. Попробуйте сократить траты на
        необязательные категории.
      </p>
    );
  }

  if (totalIncome - totalExpenses > 0) {
    return (
      <p>
        У вас есть остаток. Рассмотрите возможность инвестирования или
        сбережения.
      </p>
    );
  }

  return null;
};

export default Recommendations;
