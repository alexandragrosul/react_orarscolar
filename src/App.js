import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repetitor from "./pages/Repetitor";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repetitori/:id" element={<Repetitor />} />
      </Routes>
    </>
  );
}

export default App;
