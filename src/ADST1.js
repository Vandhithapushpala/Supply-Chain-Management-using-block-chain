import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Navbaradst1 from './components/navbaradst1';
import { ABI, Address } from './aa';
import { useLocation } from 'react-router-dom';


const Adst1 = () => {
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [data, setData] = useState([]);
  const [n1, setN1] = useState(0);
  const [i, setI] = useState(0);
  const [items, setItems] = useState([]);
  const location = useLocation();
  // Retrieve the value from LocalStorage
  let count = localStorage.getItem('count');

  // Convert the retrieved value to a number and check if it's NaN
  if (isNaN(count)) {
    // Initialize the variable if it's NaN
    count = 0;
  }
  console.log("countttt ", count);




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
    console.log("aaa", Address);
    const web3 = new Web3(window.ethereum);
    const contract = new web3.eth.Contract(ABI, Address);
    setContract(contract);
  };


  const changeWord = async () => {
    console.log("n11111", n1);
    if (n1 === 0) {
      try {
        console.log(items);
        await contract.methods.save1(items).send({ from: account });
        count++;
        localStorage.setItem('count', count);
        console.log("jjjjjjjjjjjjjjj ", count);
        setTransactionDetails();
        setN1(1);
      } catch (error) {
        console.log('Error while sending the request:', error);
      }
    } else {
      alert('You cannot add now');
    }

  };
  async function setTransactionDetails() {
    const id = await contract.methods.tt1().call();
    // let id=await contextUser.contract.methods.tt1().call();
    const web3 = new Web3(window.ethereum);

    const lastBlockNumber = await web3.eth.getBlockNumber();
    console.log('Last block number: ', lastBlockNumber);

    let block = await web3.eth.getBlock(lastBlockNumber);



    const lastTransaction = block.transactions[block.transactions.length - 1];
    console.log('Last transaction hash: ', lastTransaction);
    console.log(location.state.id, "l")
    let details = {
      txnhash: lastTransaction,
      requestId: parseInt(count)-1,
      mailId: location.state.id,
      purpose: "create and send Request to DDST"
    }

    const response = await fetch("http://localhost:8000/TransactionPost", {
      method: "post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(details)
    });




  }

  // const handleAddClick = () => {
  //   setI(prevI => prevI + 1);
  //   setItems([...items, { itemName: "", quantity: "" }]);
  // };

  const handleConfirmClick = () => {
    if (data.length === 0 && n1 === 0) {
      const newData = [];
      for (let j = 0; j < i; j++) {
        const itemName = document.getElementById(`${j}`).value;
        const quantity = document.getElementById(`${j}1`).value;
        const category = location.state.id;
        const request_number = count;
        const accepted_by = "pending";
        // const a1=null;
        // const a2=null;
        const newItem = { itemName, quantity, category, request_number, accepted_by };
        newData.push(newItem);
      }
      console.log("rrrrrrrrrrrr  ", newData);
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
  const handleAddClick = () => {
    setItems([...items, { itemName: "", quantity: "", category: location.state.id, request_number: count, accepted_by: "pending" }]);
    console.log("jfnrv", items);
  };
  const handleInputChange = (event, index) => {
    const { id, value } = event.target;
    const updatedItems = [...items];
    updatedItems[index][id] = value;
    setItems(updatedItems);
  };
  const handleRemoveItem = (e) => {
    const temp = [...items];
    temp.splice(e, 1);
    setItems(temp);
  }

  return (
    <div>
      <Navbaradst1 />

      <div className="bg-image">
        <div className="container mt-5 text-center">
          {/* Rest of the content */}
          <div className="container-fluid">
            <button type="button" className="btn btn-primary" onClick={handleAddClick}>
              ADD ITEMS
            </button>

            <div id="textboxDiv">
              {items.map((item, index) => (
                <span className="inline" key={index}>
                  <input
                    type="text"
                    placeholder="Item name"
                    id="itemName"
                    list='item'
                    value={item.itemName}
                    onChange={(event) => handleInputChange(event, index)}


                  />



                  <input
                    type="number"
                    placeholder="Quantity"
                    id="quantity"
                    value={item.quantity}
                    onChange={(event) => handleInputChange(event, index)}

                  />
                  <datalist id="item">
                    <option value="Apple"/>
                      <option value="Banana"/>
                        <option value="CustardApple"/>
                          <option value="DragonFruit"/>
                            <option value="Eggs"/>
                            </datalist>

                            <button type="button" className="btn btn-primary" onClick={handleAddClick}>
                              +
                            </button>
                            <button type="button" className="btn btn-danger" onClick={() => { handleRemoveItem(index) }}>
                              -
                            </button>
                            <br></br>
                          </span>
              ))}
                        </div>
                      </div>
                      <div className="container-fluid">
                        <br />
                        <br />
                        {/* <button type="button" className="btn btn-primary" onClick={}>
              Confirm
            </button> */}
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
