export const calculateDemand = (price) => {
  // Чем ниже цена, тем выше спрос
  return Math.max(100 - price * 10, 0);
};

export const calculateSupply = (price) => {
  // Чем выше цена, тем больше предложение
  return Math.min(price * 10, 100);
};

export const calculateMarketEquilibrium = (price) => {
  const demand = calculateDemand(price);
  const supply = calculateSupply(price);

  return {
    demand,
    supply,
    equilibrium: demand === supply,
    surplus: supply > demand ? supply - demand : 0,
    shortage: demand > supply ? demand - supply : 0,
  };
};
