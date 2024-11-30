import React from "react";

const TaxTips = ({ taxRate }) => {
  if (taxRate > 25) {
    return (
      <p>
        Рассмотрите налоговые льготы или стратегии снижения налоговой нагрузки.
      </p>
    );
  }
  return (
    <p>Налоговая ставка приемлема, но всегда полезно вести учет расходов.</p>
  );
};

export default TaxTips;
