import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SingUpPage";
import HabitsPage from "../pages/HabitsPage";
import TodayPage from "../pages/Today";
import Historic from "../pages/Historic";
import { AuthProvider } from "../components/AuthContext";

const AppRouter = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<Historic />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default AppRouter;
