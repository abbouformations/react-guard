import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ login, logout }) => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          Formation React 2023 Guard
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/unprotected"} className="nav-link">
              Link to unprotected page
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/protected"} className="nav-link">
              Link to protected page
            </Link>
          </li>
        </div>

        <div className="navbar-nav ml-auto">
          <li className="nav-item">
            <button onClick={login}>LogIn</button>
          </li>

          <li className="nav-item">
            <button onClick={logout}>LogOut</button>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
