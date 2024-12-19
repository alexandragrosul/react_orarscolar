import React, { useEffect } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = React.useState([]);
  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/economy-game/leaders"
      ); // Замените URL на адрес вашего сервера
      const data = response.data.leaders;
      console.log({ data });
      setLeaderboard(data);
      // setFilteredSchools(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  console.log(leaderboard);
  return (
    <div>
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Final Balance (MDL)</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((entry, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{entry.name}</td>
              <td>{entry.amount_of_money} MDL</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
