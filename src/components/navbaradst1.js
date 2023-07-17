
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbaradst1 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // console.log("navvv  ",location.state.role)
  // if(location.state.id=="")
  const handleLogout = () => {
    window.history.replaceState(null, '', '/');
    navigate('/');
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container ">
        <button
          className="navbar-brand btn btn-link text-white"
          onClick={() => navigate('/ADST1', { state: { id: location.state.id } })}
        >
          {location.state.id}
        </button>
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
              <button className="nav-link btn btn-link text-white" onClick={() => navigate('/ADST1REQ',{ state: { id: location.state.id } })}>
                Requests from other units
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={() => navigate('/ADST1ACC',{ state: { id: location.state.id } })}>
                REQUESTS PLACED
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link text-white" onClick={() => navigate('/ADST1ACCEPTED',{ state: { id: location.state.id } })}>
                REQUESTS ACCEPTED
              </button>
            </li>
            <li className="nav-item ">
              
              <button className="nav-link navbar-link text-white" title='User-info' onClick={handleLogout}>
                            Logout
                        </button>
              
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbaradst1;

