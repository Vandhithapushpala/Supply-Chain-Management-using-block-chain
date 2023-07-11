import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import {ABI,Address} from './aa';
import { useLocation } from 'react-router-dom';


const Adst1 = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [data, setData] = useState([]);
  const [n1, setN1] = useState(0);
  const [i, setI] = useState(0);
  const location=useLocation();
  // Retrieve the value from LocalStorage
  let count = localStorage.getItem('count');

  // Convert the retrieved value to a number and check if it's NaN
  if (isNaN(count)) {
    // Initialize the variable if it's NaN
    count = 0;
  }
  console.log(count);
  



  useEffect(() => {
    connectMetamask();
    connectContract();
  }, []);

  const connectMetamask = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
      setAccount(account);
    }
  };
 

  const connectContract = async () => {
    console.log("aaa",Address);
      const web3 =  new Web3(window.ethereum);
      const contract = new web3.eth.Contract(ABI, Address);
      setContract(contract);
  };


  const changeWord = async () => {
    console.log("n11111",n1);
    if (n1 === 0) {
      try {
        console.log(data);
        await contract.methods.save1(data).send({ from: account });
        setN1(1);
      } catch (error) {
        console.log('Error while sending the request:', error);
      }
    } else {
      alert('You cannot add now');
    }
  };

  const handleAddClick = () => {
    setI(prevI => prevI + 1);
  };

  const handleConfirmClick = () => {
    if (data.length === 0 && n1 === 0) {
      const newData = [];
      for (let j = 0; j < i; j++) {
        const itemName = document.getElementById(`${j}`).value;
        const quantity = document.getElementById(`${j}1`).value;
        const category = location.state.id;
        const request_number=count;
        const accepted_by="sent_to_ddst";
        // const a1=null;
        // const a2=null;
        const newItem = { itemName, quantity, category,request_number,accepted_by};
        newData.push(newItem);
      }
      console.log("rrrrrrrrrrrr  ",newData);
      setData(newData);
      alert('If you are sure, then click on send quote');
    } else {
      alert('You cannot add now');
    }
    
    
    // Increase the variable
    count++;
    
    // Store the updated value back into LocalStorage
    localStorage.setItem('count', count);
    
    // Use the updated value
    console.log('Count:', count);
  };

  return (
    <div>
      
     
      <div className="bg-image">
        <div className="container mt-5 text-center">
          {/* Rest of the content */}
          <div className="container-fluid">
            <button type="button" className="btn btn-primary" onClick={handleAddClick}>
              ADD ITEMS
            </button>
            <div id="textboxDiv">
              {Array.from({ length: i }, (_, index) => (
                <div className="wrapper" key={index}>
                  <span className="inline">
                    <input type="text" placeholder="Item name" id={index} />
                    <input type="number" placeholder="Quantity" id={`${index}1`} />
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="container-fluid">
            <br />
            <br />
            <button type="button" className="btn btn-primary" onClick={handleConfirmClick}>
              Confirm
            </button>
            <br />
            <button type="button" className="btn btn-success hi" onClick={changeWord}>
              SEND REQUEST
            </button>
            <br />
            <table className="table" id="1"></table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adst1;
