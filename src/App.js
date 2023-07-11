import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Adst1 from './ADST1';
import Adst2 from './ADST2';
import Adst3 from './ADST3';
import DDST1 from './DDST1';
import D from './D';
import Ddst1 from './DDST1';
import Adstreq1 from './ADST1REQ';
import Adstreq2 from './ADST2REQ';
import Adstreq3 from './ADST3REQ';
import Asc from './ASC';
import Homeadst1 from './HOMEADST1';
import Homeuni from './HOMEUNI';
import Homeddst from './HOMEDDST';
import Homeasc from './HOMEASC';
import Navbaradst from './components/navbaradst1';
import Navbaradst1 from './components/navbaradst1';
import Navbaradst2 from './components/navbaradst2';
import Navbaradst3 from './components/navbaradst3';
import Navbarasc from './components/navbarasc';
import Navbarddst from './components/navbarddst';
import Login from './Login';
// import Navbar from './components/navbaradst';
// Import other components and routes as needed

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          
        <Route path="/" element={<Login/>} />
          <Route path="/ADST1" element={<Navbaradst1/>} />
          <Route path="/ADST2" element={<Navbaradst2/>} />
          <Route path="/ADST3" element={<Navbaradst3/>} />
          <Route path="/ASC" element={<Navbarasc/>} />
          <Route path="/HOMEADST1" element={<Navbar/>} />
          <Route path="/HOMEDDST" element={<Navbar/>} />
          <Route path="/HOMEASC" element={<Navbar/>} />
          <Route path="/ADST1REQ" element={<Navbar/>} />
          <Route path="/ADST2REQ" element={<Navbar/>} />
          <Route path="/ADST3REQ" element={<Navbar/>} />
          <Route path="/D" element={<Navbarddst/>} />
          
          {/* <Route path="/DDST1" element={<DDST1/>} /> */}

          {/* Add more routes for other components */}
        </Routes>
        <Routes>
          <Route path="/" element={<Homeuni/>} />
          <Route path="/ADST1" element={<Adst1/>} />
          <Route path="/ADST2" element={<Adst2/>} />
          <Route path="/ADST3" element={<Adst3/>} />
          <Route path="/D" element={<D/>} />
          <Route path="/ADST1REQ" element={<Adstreq1/>} />
          <Route path="/ADST2REQ" element={<Adstreq2/>} />
          <Route path="/ADST3REQ" element={<Adstreq3/>} />
          <Route path="/ASC" element={<Asc/>} />
          <Route path="/HOMEADST1" element={<Homeadst1/>} />
          <Route path="/HOMEDDST" element={<Homeddst/>} />
          <Route path="/HOMEASC" element={<Homeasc/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
// import './App.css'
// import Home from "./Home"
// import Login from "./Login"
// import Signup from "./Signup"
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login/>}/>
//           <Route path="/signup" element={<Signup/>}/>
//           <Route path="/home" element={<Home/>}/>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;