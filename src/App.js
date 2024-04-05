import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Protected from "./components/Protected";
import Unprotected from "./components/Unprotected";
import Home from "./components/Home";
import GuardedRoute from "./components/GuardedRoute";
import { useState } from "react";
import AccessDenied from "./components/AccessDenied";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
function App() {
  const [isAutheticated, setisAutheticated] = useState(false);

  function login() {
    setisAutheticated(true);
    console.log("loggedInUser:" + isAutheticated);
  }

  function logout() {
    setisAutheticated(false);
    console.log("loggedInUser:" + isAutheticated);
  }

  return (
    <Router>
      <NavBar login={login} logout={logout} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restricted" element={<AccessDenied />} />

        <Route
          path="/protected"
          element={<GuardedRoute auth={isAutheticated} component={Protected} />}
        />
        <Route path="/unprotected" element={<Unprotected />} />
      </Routes>
    </Router>
  );
}

export default App;
