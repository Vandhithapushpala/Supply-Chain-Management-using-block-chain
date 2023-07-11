import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Homeasc = () => {
    const navigate=useNavigate();
    return (
    
        <div>
            <br></br>
            <br></br>
            <h1>WELCOME CROCODILE</h1>
            <br></br>
            <br></br>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                    
                    </div>
                    <div className="col">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">ASC</h5>
                            <p className="card-text"></p>
                            <button type="button" className="btn btn-primary"
                            onClick={()=>navigate("/ASC")}
                            >GO TO ASC</button>
                            {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homeasc;