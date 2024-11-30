import React from "react";

const PaymentSummary = ({ monthlyPayment, totalPayment, totalInterest }) => {
  return (
    <div>
      <h3>Результаты</h3>
      <p>Ежемесячный платеж: {monthlyPayment.toFixed(2)} MDL</p>
      <p>Общая сумма выплат: {totalPayment.toFixed(2)} MDL</p>
      <p>Итоговая переплата: {totalInterest.toFixed(2)} MDL</p>
    </div>
  );
};

export default PaymentSummary;
