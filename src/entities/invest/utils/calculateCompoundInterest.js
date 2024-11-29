export const calculateCompoundInterest = (P, PMT, r, n, t) => {
  const annualRate = r / 100;
  const compoundFactor = Math.pow(1 + annualRate / n, n * t);
  const futureValue =
    P * compoundFactor + PMT * ((compoundFactor - 1) / (annualRate / n));
  return futureValue;
};
