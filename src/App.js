import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repetitor from "./pages/Repetitor";
import Timetable from "./pages/Timetable";
import Wrapper from "./components/Wrapper";
import Schools from "./pages/Schools";
import RepetitoriPage from "./pages/RepetitoriPage";
import SchoolPage from "./pages/SchoolPage";
import Registration from "./pages/Registartion";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/repetitori" element={<RepetitoriPage />} />
          <Route path="/repetitori/:id" element={<Repetitor />} />
          <Route path="/timetable/:schoolId" element={<Timetable />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/schools/:id" element={<SchoolPage />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
