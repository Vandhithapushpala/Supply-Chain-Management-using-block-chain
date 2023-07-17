import React, { useEffect, useRef, useState } from 'react';
import Web3 from 'web3';
import { ABI, Address } from './aa';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbaradst1 from './components/navbaradst1';
const Transactions = ({ setFlag }) => {
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [data, setData] = useState([]);
    const [txnDetails, setTxnDetails] = useState([]);
    const buttonRef = useRef();
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();


    useEffect(() => {
        async function getDetails() {
            // console.log("ehgdfvbjen")
            try {
                let getdetails = JSON.parse(sessionStorage.getItem("details"))

                console.log("lllllll  ", getdetails[0], getdetails[1])
                // setDetails(getdetails);
                const web3 = new Web3(window.ethereum);
                const response = await fetch("http://localhost:8000/Transactions", {
                    method: "post",
                    headers: {
                        "Content-type": "application/json",
                    },
                    body: JSON.stringify(getdetails)
                });
                let data = await response.json();
                console.log(data, "hii")
                // setData(data)
                let txnDetails = []
                for (let i of data) {
                    let { txnhash } = i;
                    const transaction = await web3.eth.getTransaction(txnhash);
                    console.log(transaction)
                    txnDetails.push(transaction)
                }

                setTxnDetails(txnDetails);

            }
            catch (e) {
                console.log(e)

            }



        }
        getDetails();
        buttonRef.current.click();

    }, []);

    
        return (
            <div>

                <button type="button" ref={buttonRef} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">

                                <p> Hash=
                                {txnDetails[0]!=undefined && 
                                
                                txnDetails[0].hash}
                                </p>
                                <p> Chain Id=
                                {txnDetails[0]!=undefined && 
                                
                                parseInt(txnDetails[0].chainId)}
                                </p>
                                <p> nonce=
                                {txnDetails[0]!=undefined && 
                                
                                parseInt(txnDetails[0].nonce)}
                                </p>
                                <p> Block Hash=
                                {txnDetails[0]!=undefined && 
                                
                                txnDetails[0].blockHash}
                                </p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setFlag(false)}>Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


export default Transactions;
