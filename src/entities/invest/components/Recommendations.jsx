import React from "react";

const Recommendations = ({
  monthlyContribution,
  annualRate,
  futureValue,
  years,
}) => {
  return (
    <div>
      <p>
        Инвестируя <b>{monthlyContribution} ₽</b> в месяц под{" "}
        <b>{annualRate}%</b> годовых, вы накопите{" "}
        <b>{futureValue.toFixed(2)} ₽</b> через {years} лет.
      </p>
      <p>
        Чтобы увеличить доход, попробуйте увеличить ежемесячное пополнение или
        выбрать более выгодные инструменты.
      </p>
    </div>
  );
};

export default Recommendations;
