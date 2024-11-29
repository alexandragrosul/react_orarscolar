import React from "react";

const ResultTable = ({ results }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Сценарий</th>
          <th>Итоговая сумма</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td>{result.scenario}</td>
            <td>{result.value.toFixed(2)} ₽</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultTable;
