import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Repetitor from "./pages/Repetitor/Repetitor";
import Timetable from "./pages/Timetable";
import Wrapper from "./components/Wrapper";
import Schools from "./pages/Schools";
import RepetitoriPage from "./pages/Repetitor/RepetitoriPage";
import SchoolPage from "./pages/SchoolPage";
import Registration from "./pages/Registration";
import { profesors } from "./data";
import RepetitorAdd from "./pages/Repetitor/RepetitorAdd";
import "./App.css";
import Login from "./pages/Login";
import ProtectedRoute from "./navigation/ProtectedRoute";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./theme/theme";
import Events from "./pages/Events";
import SchoolAdd from "./pages/SchoolAdd";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route
            path="/"
            element={<Home profesors={profesors.slice(0, 4)} />}
          />
          <Route path="/repetitori" element={<RepetitoriPage />} />
          <Route path="/repetitori/:id" element={<Repetitor />} />
          {/* <Route path="/repetitor/add" element={<RepetitorAdd />} /> */}
          <Route
            path="/repetitor/add"
            element={
              <ProtectedRoute>
                <RepetitorAdd />
              </ProtectedRoute>
            }
          />
          <Route path="/timetable/:schoolId" element={<Timetable />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/schools/:id" element={<SchoolPage />} />
          <Route path="/schools/add" element={<SchoolAdd />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
