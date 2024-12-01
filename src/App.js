import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Timetable from "./pages/Timetable";
// import TimeTable from "timetable/Timetable";
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
import { TimeTable } from "./components/timetable/Timetable";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers";
import CoursePage from "./pages/CoursePage";
import Courses from "./pages/Courses";
import FinPlus from "./pages/FinPlus";
import ViewInvest from "./entities/invest/ViewInvest";
import ViewBudget from "./entities/budget/ViewBudget";
import ViewLoan from "./entities/loan/ViewLoan";
import ViewTax from "./entities/tax/ViewTax";
import ViewSimulator from "./entities/simulator/ViewSimulator";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route
              path="/"
              element={<Home profesors={profesors.slice(0, 4)} />}
            />
            {/* <Route path="/repetitori" element={<RepetitoriPage />} /> */}
            {/* <Route path="/repetitori/:id" element={<Repetitor />} /> */}
            {/* <Route path="/repetitor/add" element={<RepetitorAdd />} /> */}
            {/* <Route path="/timetable/:schoolId" element={<Timetable />} /> */}
            <Route path="/schools" element={<Schools />} />
            <Route path="/schools/:id" element={<SchoolPage />} />
            <Route path="/schools/add" element={<AddSchool />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/answers" element={<Answers />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/timetable" element={<TimeTable />} />
            <Route path="/tasks" element={<TasksList />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/finplus" element={<FinPlus />} />
            <Route path="/finplus/invest" element={<ViewInvest />} />
            <Route path="/finplus/budget" element={<ViewBudget />} />
            <Route path="/finplus/loan" element={<ViewLoan />} />
            <Route path="/finplus/tax" element={<ViewTax />} />
            <Route path="/finplus/simulator" element={<ViewSimulator />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
