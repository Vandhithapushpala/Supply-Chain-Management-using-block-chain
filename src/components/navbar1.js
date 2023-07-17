import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Login from '../Login';

const Navbarasc = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.history.replaceState(null, '', '/');
    navigate('/');
  };
  // const location = useLocation();
  // console.log("hhhh  ",location.state.id);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          HOME
          {/* {location.state.id} */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link className="nav-link text-white" to="/">
              <button className="nav-link navbar-link text-white" title='User-info' onClick={handleLogout}>
                            Logout
                        </button>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link text-white" to="/signup">
              <button className="nav-link navbar-link text-white" title='User-info' >
                            Register
                        </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarasc;
