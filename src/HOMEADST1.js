import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
const Homeadst1 = () => {
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
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">ADST 1</h5>
                            <p className="card-text"></p>
                            <button type="button" className="btn btn-primary"
                            onClick={()=>navigate("/ADST1")}
                            >GO TO ADST</button>
                            {/* <a href="/HOMEADST1" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">ADST 2</h5>
                            <p className="card-text"></p>
                            <button type="button" className="btn btn-primary"
                            onClick={()=>navigate("/ADST2")}
                            >GO TO ffDDST</button>
                            {/* <a href="" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    </div>
                    <div className="col">
                    <div className="card" >
                        <div className="card-body">
                            <h5 className="card-title">ADST 3</h5>
                            <p className="card-text"></p>
                            <button type="button" className="btn btn-primary"
                            onClick={()=>navigate("/ADST3")}
                            >GO TO DDST</button>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Homeadst1;