import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


import "../../styles/navbar.css"

export const Navbar = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);

  const handleLogout = () => {
    actions.logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 h1">
          <span className="logo-text">SIGHTSEEKER</span>
        </Link>
        <div className="ml-auto">
          {!store.token ? (
            <div>
              <Link to="/signup">
                <button className="navbar-signup-button">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="navbar-login-button">Log in</button>
              </Link>
            </div>
          ) : (
            <div>
              <button onClick={handleLogout} className="logout btn btn-primary">
                Logout
              </button>
              <Link to="/profile">
                <button className="profile btn btn-primary">Profile</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
