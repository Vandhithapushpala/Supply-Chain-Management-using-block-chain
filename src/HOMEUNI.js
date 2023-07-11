import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Homeuni = () => {
    const navigate=useNavigate();
    return (
        <div>
            <br></br>
            <br></br>
            <h1>WELCOME CROCODILE</h1>
            <br></br>
            <br></br>
            <br></br>
            <h3>Who are You?</h3>
            <br></br>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">ADST</h5>
                            <p className="card-text">Go To ADST</p>
                            <button type="button" className="btn btn-primary"
                            onClick={()=>navigate("/HOMEADST1")}
                            >GO TO ADST</button>
                            {/* <a href="/HOMEADST1" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">DDST</h5>
                            <p className="card-text">Go to DDST</p>
                            <button type="button" className="btn btn-primary"
                            onClick={()=>navigate("/HOMEDDST")}
                            >GO TO DDST</button>
                            {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">ASC</h5>
                            <p className="card-text">Go to ASC</p>
                            <button type="button" className="btn btn-primary"
                            onClick={()=>navigate("/HOMEASC")}
                            >GO TO ASC</button>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            


        </div>
    )
}
export default Homeuni;