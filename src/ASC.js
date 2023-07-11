import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import { ABI, Address } from './aa';
const Asc = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  useEffect(() => {
    connectMetamask();
    connectContract();
    filltable();
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
  const m2 = async () => {
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    const data = await window.contract.methods.rettoasc().call();
    const s1 = await window.contract.methods.tt1().call();
    const s2 = await window.contract.methods.tt2().call();
    const s3 = await window.contract.methods.tt3().call();


  }
  const change = (id) => {
    const button = document.getElementById(`myButton${id}`);
    if (button.innerHTML === "Supply") {
      button.innerHTML = "Close Curtain";
    } else {
      button.innerHTML = "Supply";
    }
  };
  const filltable = async () => {
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract(ABI, Address);
    const data = await window.contract.methods.rettoasc().call();
    console.log("[[[[[[[]]]]]]]", data);
    const s1 = await window.contract.methods.tt1().call();
    const s2 = await window.contract.methods.tt2().call();
    const s3 = await window.contract.methods.tt3().call();
    var r1 = 0;
    var r2 = 0;
    var r3 = 0;
    let de = "";
    let st = "";
    for (let i = 0; i < data.length; i++) {
      de += `
<div class="modal fade" id="exampleMod" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
// console.log("eyyyyy",s11)
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body" id="u">
  <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
      </tr>
    </thead>
    <tbody id="31${i}">
      <!-- table body content -->
    </tbody>
  </table>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
</div>
</div>
</div>
</div>
`;
    }
    // document.getElementById("2").innerHTML+=de;


    console.log("uidhfu", data);
    for (let i = 0; i < data.length; i++) {
      let qa1 = "";
      let qa2 = "";
      let qa3 = "";
      if (data[i].category == "ADST1") {
        if (r1 == 0) {
          st += `
              <tr>
                  <td>${data[i].category}</td>
                  <td><button type="button" class="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal1">
See Details
</button></td>
                  <td><button type="button" onClick={() => change(1)} id="myButton1"  class="btn btn-success">Supply</button></td>
                </tr>
              `;
          for (let i = 0; i < data.length; i++) {
            if (data[i].category == "ADST1") {
              qa1 += `
                        <tr>
                          <td>${data[i].itemName}</td>
                          <td>${data[i].quantity}</td>
                          <td>${data[i].category}</td>
                          </tr>
                        `

            }

          }
          document.getElementById("31").innerHTML = qa1;
          r1++;

        }
      }
      if (data[i].category == "ADST2") {
        console.log("iiiiiiiiiiii")
        if (r2 == 0) {
          st += `
              <tr>
                  <td>${data[i].category}</td>
                  <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    See Details
</button></td>
                <td><button type="button" onClick={() => change(2)} id="myButton2"  class="btn btn-success">Supply</button></td>
                </tr>
              `;
          for (let i = 0; i < data.length; i++) {
            if (data[i].category == "ADST2") {
              qa2 += `
                        <tr>
                          <td>${data[i].itemName}</td>
                          <td>${data[i].quantity}</td>
                          <td>${data[i].category}</td>
                          </tr>
                        `

            }

          }
          document.getElementById("32").innerHTML = qa2;
          r2++;

        }

      }
      if (data[i].category == "ADST3") {
        if (r3 == 0) {
          st += `
              <tr>
                  <td>${data[i].category}</td>
                  <td><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                    See Details
</button></td>
                <td><button type="button" onclick="change(3)" id="myButton3" class="btn btn-success">Supply</button></td>
                </tr>
              `;
          for (let i = 0; i < data.length; i++) {
            if (data[i].category == "ADST3") {
              qa3 += `
                        <tr>
                          <td>${data[i].itemName}</td>
                          <td>${data[i].quantity}</td>
                          <td>${data[i].category}</td>
                          </tr>
                        `

            }

          }
          document.getElementById("33").innerHTML = qa3;
          r3++;

        }
      }

    }
    document.getElementById("tab").innerHTML += st;

  }
  return (
    <div>
      <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id="u">
              <table className="table">
                <thead>
                  <tr>

                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit</th>

                  </tr>
                </thead>
                <tbody id="31">

                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id="u">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit</th>

                  </tr>
                </thead>
                <tbody id="32">

                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" id="u">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit</th>

                  </tr>
                </thead>
                <tbody id="33">

                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto p-9">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">UNIT</th>
              <th scope="col">DETAILS</th>
              <th scope="col">SUPPLY?</th>
            </tr>
          </thead>
          <tbody id="tab">
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Asc;
