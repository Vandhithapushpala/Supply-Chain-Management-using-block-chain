import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import { ABI, Address } from './aa';
const Adstreq3 = () => {
    const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);
    useEffect(() => {
        connectMetamask();
        connectContract();
        ad();
    }, []);

    const connectMetamask = async () => {
        if (typeof window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            setAccount(account);
        }
    };

    const connectContract = async () => {
        try {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(ABI, Address);
            setContract(contract);
        } catch (error) {
            console.log('Failed to connect to the contract:', error);
        }
    };
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    const ac1 = async () => {
        console.log("bayata");
        document.getElementById("acc").innerHTML = "Accepted";

        if (n1 == 0) {
            console.log("lopala");
            await window.contract.methods.resreq(["ADST3", "ADST1", "1"]).send({ from: account });
            n1++;
        }

    }
    const ac2 = async () => {
        document.getElementById("acc").innerHTML = "Accepted";

        if (n2 == 0) {
            await window.contract.methods.resreq(["ADST3", "ADST2", "1"]).send({ from: account });
            n2++;
        }

    }
    const re1 = async () => {

        if (n3 == 0) {

            await window.contract.methods.resreq(["ADST3", "ADST1", "0"]).send({ from: account });
            n3++;
        }

    }
    const re2 = async () => {

        if (n4 == 0) {

            await window.contract.methods.resreq(["ADST3", "ADST2", "0"]).send({ from: account });
            n4++;
        }

    }
    const ad = async () => {
        let r = 0;
        let r1 = 0;

        let st = "";
        let re = "";
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        const data = await window.contract.methods.retdgst1().call();
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            if (data[i].category == "ADST1") {
                st += `
                <tr>
                
                  <td>${data[i].itemName}</td>
                <td>${data[i].quantity}</td>
                <td>${data[i].category}</td>
            </tr>`;

            }
            if (data[i].category == "ADST2") {
                re += `
                <tr>
                
                  <td>${data[i].itemName}</td>
                <td>${data[i].quantity}</td>
                <td>${data[i].category}</td>
            </tr>`;

            }
            r++;
            r1++;

        }
        document.getElementById("1").innerHTML += st;
        document.getElementById("2").innerHTML += re;

    }
    return (
        <div className='container'>
            <br></br>
             <div className="col">
            <div>
                <h1 className="text-start">ADST 1:</h1>
                <table className="table">
                    <thead>
                        <tr>

                            <th scope="col">item name</th>
                            <th scope="col">quantity</th>
                            <th scope="col">unit</th>
                        </tr>
                    </thead>
                    <tbody id="1">

                    </tbody>
                </table>
                <button type="button" className="btn btn-success" id="acc" onClick={()=>ac1()}>ACCEPT</button>
                <button type="button" className="btn btn-danger" onClick={()=>re1()}>REJECT</button>
            </div>
            <div>
          <br></br>
          <br></br>
          <h1 className="text-start">ADST 2:</h1>
          <table className="table">
            <thead>
              <tr>

                <th scope="col">item name</th>
                <th scope="col">quantity</th>
                <th scope="col">unit</th>
              </tr>
            </thead>
            <tbody id="2">

            </tbody>
          </table>
          <button type="button" className="btn btn-success" onClick={()=>ac2()}>ACCEPT</button>
          <button type="button" className="btn btn-danger" onClick={()=>re2()}>REJECT</button>
          <br></br>
          <br></br>
          </div>
        </div>
        </div>
    );

}
export default Adstreq3;