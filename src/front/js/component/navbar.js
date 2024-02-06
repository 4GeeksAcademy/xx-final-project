import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

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
        <Link to="/" className="navbar-brand mb-0 h1"> {/* Added className */}
          <span className="logo-text"> {/* Added className */}
            Sight Seeker
          </span>
        </Link>
        <div className="ml-auto">
          {!store.token ?
            <div>
              <Link to="/signup">
                <button className="signup btn btn-primary">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="btn btn-primary">
                  Log in
                </button>
              </Link>
            </div>
            :
            <button onClick={handleLogout} className='btn btn-primary'>Logout</button>
          }
        </div>
      </div>
    </nav>
  );
};

