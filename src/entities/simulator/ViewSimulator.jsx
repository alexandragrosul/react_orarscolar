import React, { useState } from "react";
import MarketControlPanel from "./components/MarketControlPanel";
import MarketChart from "./components/MarketChart";
import MarketStats from "./components/MarketStats";
import MarketTips from "./components/MarketTips";
import { calculateMarketEquilibrium } from "./utils/marketCalculations";
import { Container } from "@mui/system";

const ViewSimulator = () => {
  const [price, setPrice] = useState(10);
  const { demand, supply, surplus, shortage, equilibrium } =
    calculateMarketEquilibrium(price);

  return (
    <Container>
      <h1>Симулятор спроса и предложения</h1>
      <MarketControlPanel price={price} setPrice={setPrice} />
      <MarketStats
        demand={demand}
        supply={supply}
        surplus={surplus}
        shortage={shortage}
        equilibrium={equilibrium}
      />
      <MarketChart price={price} />
      <MarketTips />
    </Container>
  );
};

export default ViewSimulator;
