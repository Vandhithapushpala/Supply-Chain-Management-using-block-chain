
import Adst1 from './ADST1';
import Ddst1 from './DDST1';
import Adstreq1 from './ADST1REQ';
import Navbaradst1 from './components/navbaradst1';
import './App.css'
import Home from "./Home"
import Login from "./Login"
import Signup from "./Signup"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AdstAcceptedRequests from './ADST1ACC';
import Asc from './ASC';
import SignUp from './Signup';
import AdstAccepted from './ADST1ACCEPTED';


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/ADST1" element={<Adst1/>} />
          <Route path="/ADST1REQ" element={<Adstreq1/>} />
          <Route path="/ADST1ACC" element={<AdstAcceptedRequests/>} />
          <Route path="/DDST1" element={<Ddst1/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/ASC" element={<Asc/>} />
          <Route path="/ADST1ACCEPTED" element={<AdstAccepted/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;