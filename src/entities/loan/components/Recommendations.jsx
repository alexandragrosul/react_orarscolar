import React from "react";

const Recommendations = ({ totalInterest, loanAmount }) => {
  if (totalInterest > loanAmount * 0.5) {
    return (
      <p>
        Переплата по кредиту слишком велика. Рассмотрите возможность увеличения
        первоначального взноса или сокращения срока кредита.
      </p>
    );
  }
  return <p>Условия кредита выглядят оптимальными.</p>;
};

export default Recommendations;
