import React from "react";

const TaxResult = ({ taxAmount, netIncome, taxRate, income, medTaxRate }) => {
  return (
    <div>
      <h3>Результаты</h3>
      <p>Ставка налога: {taxRate}%</p>
      <p>Мед. страх.: {medTaxRate}%</p>
      <p>Сумма налога: {taxAmount.toFixed(2)} MDL</p>
      <p>Мед. страх.: {income * 0.09} MDL</p>
      <p>Чистый доход: {netIncome.toFixed(2)} MDL</p>
      <p>Полныи оклад: {income + income * 0.29} MDL</p>
    </div>
  );
};

export default TaxResult;
