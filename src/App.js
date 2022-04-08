import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/css/main.css";
import "./assets/css/mobile.css";
import HomePage from "./components/Homepage/Homepage";
// import "./assets/css/bootstrap-datepicker.min.css";
// import "./assets/css/profile.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
