import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/mobile.css";
import HomePage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import LoginbyEmail from "./components/Login/LoginbyEmail";
import ForgotPassword from "./components/Login/ForgotPassword";
import ResetPassword from "./components/Login/ResetPassword";
// import "./assets/css/bootstrap-datepicker.min.css";
// import "./assets/css/profile.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginbyemail" element={<LoginbyEmail />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
