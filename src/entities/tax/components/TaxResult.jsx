import React from "react";

const TaxResult = ({ taxAmount, netIncome, taxRate }) => {
  return (
    <div>
      <h3>Результаты</h3>
      <p>Ставка налога: {taxRate}%</p>
      <p>Сумма налога: {taxAmount.toFixed(2)} MDL</p>
      <p>Чистый доход: {netIncome.toFixed(2)} MDL</p>
    </div>
  );
};

export default TaxResult;
