import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repetitor from "./pages/Repetitor";
import Timetable from "./pages/Timetable";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repetitori/:id" element={<Repetitor />} />
        <Route path="/timetable" element={<Timetable />} />
      </Routes>
    </>
  );
}

export default App;
