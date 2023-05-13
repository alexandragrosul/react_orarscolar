import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repetitor from "./pages/Repetitor";
import Timetable from "./pages/Timetable";
import Wrapper from "./components/Wrapper";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/repetitori/:id" element={<Repetitor />} />
          <Route path="/timetable" element={<Timetable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
