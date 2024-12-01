import React from "react";

const MarketStats = ({ demand, supply, surplus, shortage, equilibrium }) => {
  return (
    <div>
      <h3>Рыночные показатели</h3>
      <p>Спрос: {demand}</p>
      <p>Предложение: {supply}</p>
      {equilibrium && <p>Равновесие достигнуто!</p>}
      {!equilibrium && (
        <>
          {shortage > 0 && <p>Дефицит: {shortage}</p>}
          {surplus > 0 && <p>Избыток: {surplus}</p>}
        </>
      )}
    </div>
  );
};

export default MarketStats;
