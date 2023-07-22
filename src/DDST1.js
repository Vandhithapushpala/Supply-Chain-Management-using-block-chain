import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { ABI, Address } from './aa';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';

const Ddst1 = () => {
    const [account, setAccount] = useState(null);
    const [contract, setContract] = useState(null);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [nz, setNz] = useState(0);
    const location=useLocation();
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
    }, []);
    const rat = async () => {
      var button = document.getElementById('bu1');
      button.disabled = true;
      if (account && contract && nz === 0) {
        // await contract.methods.save2(selectedElements).send({ from: account });
        await contract.methods.save3([]).send({ from: account });
        setNz(1);
      }
      window.alert("sent to ADST");
    };
    var arey=[];
    const parot = async () => {
      window.web3 = await new Web3(window.ethereum);
      window.contract = await new window.web3.eth.Contract(ABI, Address);
      const data = await window.contract.methods.tt1().call();
      console.log(data);
      // const s2 = await window.contract.methods.tt2().call();
      // const s3 = await window.contract.methods.tt3().call();
      for (let i = 0; i < data.length; i++) {
        if (data[i].accepted_by == "pending") {
          arey.push(data[i]);
        }
      }
      console.log("seeee ", arey);
      window.alert("sent to ASC")
      if (account && contract ) {
        // await contract.methods.save2(selectedElements).send({ from: account });
        await contract.methods.save3([]).send({ from: account });
       
      }



    };

    console.log('Data:', data);

    return (
        <div className="AdstAcceptedRequests">
          <Navbar/>
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
                        <table className="table table-dark table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">Item Name</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Unit name</th>
                                    <th scope="col">Request no.</th>
                                    <th scope="col">Accepted By:</th>
                                </tr>
                            </thead>
                            <tbody id="fff2">
                                {data
                                    // .filter(item => item.accepted_by === location.state.id)
                                    .map((item, index) => (
                                        <tr key={index}>
                                            <td>{item[0]}</td>
                                            <td>{item[1]}</td>
                                            <td>{item[2]}</td>
                                            <td>{item[3]}</td>
                                            <td>{item[4]}</td>
                              
                                        </tr>
                                    ))}
                            </tbody>

                        </table>
                    )}

                    <br />
                    <br />
                    <button onClick={rat} type="button" className="btn btn-success" id="bu1">SEND REQUESTS TO ADST</button>
          <br/><br/><br/><br/>
          <button onClick={parot} type="button" className="btn btn-success">SEND PENDING REQUESTS TO ASC</button>
          <br/><br/><br/><br/><br/>
                </div>
            </div>
        </div>
    );
};

export default Ddst1;
