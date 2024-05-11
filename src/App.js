import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Timetable from "./pages/Timetable";
import Answers from "./pages/Answers";
import Wrapper from "./components/Wrapper";
import Schools from "./pages/Schools";
import SchoolPage from "./pages/SchoolPage";
import Registration from "./pages/Registration";
import { profesors } from "./data";
import "./App.css";
import Login from "./pages/Login";
// import ProtectedRoute from "./navigation/ProtectedRoute";
import { ThemeProvider } from "@mui/material";
import { appTheme } from "./theme/theme";
import Events from "./pages/Events";
import AddSchool from "./pages/AddSchool";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";

import { TasksList } from "./components/tasks/TasksList";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route
            path="/"
            element={<Home profesors={profesors.slice(0, 4)} />}
          />
          {/* <Route path="/repetitori" element={<RepetitoriPage />} /> */}
          {/* <Route path="/repetitori/:id" element={<Repetitor />} /> */}
          {/* <Route path="/repetitor/add" element={<RepetitorAdd />} /> */}
          <Route path="/timetable/:schoolId" element={<Timetable />} />
          <Route path="/schools" element={<Schools />} />
          <Route path="/schools/:id" element={<SchoolPage />} />
          <Route path="/schools/add" element={<AddSchool />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/answers" element={<Answers />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/timetable" element={<Timetable />} />
          <Route path="/tasks" element={<TasksList />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
