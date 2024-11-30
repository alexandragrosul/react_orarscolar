export const calculateTax = (income, incomeType, country) => {
  const taxRates = {
    Moldova: { salary: 12, business: 15, investments: 10 },
    USA: { salary: 20, business: 25, investments: 15 },
    Germany: { salary: 30, business: 35, investments: 25 },
  };

  const rate = taxRates[country][incomeType];
  const taxAmount = (income * rate) / 100;
  const netIncome = income - taxAmount;

  return { taxAmount, netIncome, taxRate: rate };
};
