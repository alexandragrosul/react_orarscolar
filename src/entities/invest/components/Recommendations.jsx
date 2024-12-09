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
        By investing <b>{monthlyContribution.toFixed(2)} MDL</b> monthly at an{" "}
        <b>{annualRate}%</b> annual interest rate, you will accumulate{" "}
        <b>{futureValue.toFixed(2)} MDL</b> in {years} years.
      </p>
      <p>
        To increase your returns, consider increasing your monthly contribution
        or selecting higher-yield investment options.
      </p>
    </div>
  );
};

export default Recommendations;
