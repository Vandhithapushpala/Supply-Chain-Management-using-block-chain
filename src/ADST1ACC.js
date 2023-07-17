import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { ABI, Address } from './aa';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbaradst1 from './components/navbaradst1';
import Transactions from './transactions';
const AdstAcceptedRequests = () => {
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();
    const [flag,setFlag]=useState(false)
    const [ds,setDs]=useState()
    useEffect(() => {
        const connectMetamask = async () => {
            if (typeof window.ethereum !== 'undefined') {
                const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                const account = accounts[0];
                setAccount(account);
            }
        };

        const connectContract = async () => {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(ABI, Address);
            setContract(contract);
        };

        const fetchData = async () => {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(ABI, Address);
            const data = await contract.methods.tt1().call();
            setData(data);
            setIsLoading(false);
        };

        connectMetamask();
        connectContract();
        fetchData();
        // getDetails();
    }, []);

    console.log('Data:', data);
    async function getDetails() {

        console.log("kii")
        setFlag(true)
    }

    return (
        <div className="AdstAcceptedRequests">
            <Navbaradst1 />
            <div className="bg-image">
                <div className="container text-center">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col-20">
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1>REQUESTS:</h1>
                            <p id="accountArea">Connection Status: {account ? `Connected to Metamask (${account})` : 'NOT CONNECTED to Metamask'}</p>
                            <p id="contractArea">Connection Status: {contract ? 'Connected to Smart Contract' : 'NOT CONNECTED to Smart Contract'}</p>
                        </div>
                        <div className="col"></div>
                    </div>
                    {isLoading ? (
                        <p>Loading data...</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit name</th>
                                    <th scope="col">Request no.</th>
                                    <th scope="col">Accept</th>
                                    <th scope="col">Details</th>
                                </tr>
                            </thead>
                            <tbody id="fff2">
                                {data
                                    .filter(item => item[2] === location.state.id)
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td>{item[0]}</td>
                                            <td>{item[1]}</td>
                                            <td>{item[2]}</td>
                                            <td>{item[3]}</td>
                                            <td>{item[4]}</td>
                                            <td>
                                                <button className="btn btn-primary mb-3" onClick={() => {
                                                    sessionStorage.setItem("details", JSON.stringify([item[2], item[3]]))
                                                    console.log("ddddddd",sessionStorage.getItem("details"))
                                                    getDetails()
                                    
                                                }}>transaction</button>
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>

                        </table>
                    )}

                    <br />
                    <br />
                </div>
            </div>
           { flag && <Transactions setFlag={setFlag}/>}
        </div>

    );
};

export default AdstAcceptedRequests;
