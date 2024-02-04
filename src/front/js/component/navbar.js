import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/navbar.css";

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
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Sight Seeker</span>
        </Link>
        <div className="ml-auto">
          {!store.token ? (
            <div>
              <Link to="/signup">
                <button className="signup btn btn-primary">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-primary">Log in</button>
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
