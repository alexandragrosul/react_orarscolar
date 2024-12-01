import React from "react";

const MarketControlPanel = ({ price, setPrice }) => {
  return (
    <div>
      <h3>Управление рынком</h3>
      <label>
        Цена продукта (MDL):
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          step="0.1"
          min="1"
          max="100"
        />
      </label>
    </div>
  );
};

export default MarketControlPanel;
