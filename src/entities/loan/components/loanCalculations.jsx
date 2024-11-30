export const calculateAnnuityPayment = (loanAmount, annualRate, termMonths) => {
  const monthlyRate = annualRate / 12 / 100;
  const annuityFactor =
    (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) /
    (Math.pow(1 + monthlyRate, termMonths) - 1);
  const monthlyPayment = loanAmount * annuityFactor;
  const totalPayment = monthlyPayment * termMonths;
  const totalInterest = totalPayment - loanAmount;

  return { monthlyPayment, totalPayment, totalInterest };
};
