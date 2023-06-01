import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SingUpPage";
import TodayPage from "../pages/TodayPage";
import HabitsPage from "../pages/HabitsPage";
import Historic from "../pages/Historic";
import { AuthProvider } from "../components/AuthContext";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRouter;
