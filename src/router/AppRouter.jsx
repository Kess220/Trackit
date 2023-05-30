import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SingupPage from "../pages/SingUpPage";
import HabitsPage from "../pages/HabitsPage";
import TodayPage from "../pages/Today";
import Historic from "../pages/Historic";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SingupPage />} />
        <Route path="/habitos" element={<HabitsPage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/historico" element={<Historic />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
