import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbaradst2 = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          ADST 2
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
            
            <li className="nav-item">
              <Link className="nav-link" to="/ADST1REQ">
              Requests from adstreq1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ADST3REQ">
              Requests from adstreq3
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/accepted">
                REQUESTS PLACED
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbaradst2;
