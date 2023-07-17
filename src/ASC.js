import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import { ABI, Address } from './aa';
import Navbar from './components/navbar';
import Navbarasc from './components/navbar1';
import Navbaradst1 from './components/navbaradst1';
import { useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const AdstRequests = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  const [data1, setData1] = useState([]);
  const [selectedElements, setSelectedElements] = useState([]);
  const [nz, setNz] = useState(0);
  const location = useLocation();
  const [dataFetched, setDataFetched] = useState(false);
  // console.log("adst1req ", location.state.id);
  useEffect(() => {
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

    const fetchData = async () => {
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(ABI, Address);
      const data = await contract.methods.tt1().call();
      setData1(data);
      setDataFetched(true);
    };

    connectMetamask();
    connectContract();
    fetchData();
  }, []);

  // const handleSelection = (index) => {
  //   const checkbox = document.getElementById(`flexCheckIndeterminate${index}`);
  //   if (checkbox.checked) {


  //     const updatedData1 = [...data1];
  //     updatedData1[index] = [...updatedData1[index]];
  //     updatedData1[index][4] = location.state.id;
  //     updatedData1[index].itemName=updatedData1[index][0];
  //     updatedData1[index].quantity=updatedData1[index][1];
  //     updatedData1[index].category=updatedData1[index][2];
  //     updatedData1[index].request_number=updatedData1[index][3];
  //     updatedData1[index].accepted_by = location.state.id;
  //     setData1(updatedData1);
  //     console.log("uuu  ",updatedData1);
  //     setSelectedElements((prevSelected) => [...prevSelected, updatedData1[index]]);
  //   } else {
  //     const elementIndex = selectedElements.findIndex((elem) => elem[0] === data1[index][0]);
  //     const sel = [...selectedElements];
  //     sel.splice(elementIndex, 1);
  //     setSelectedElements(sel);
  //   }
  //   // console.log("data11", selectedElements);
  // };
  const handleSelection = (index) => {
    const checkbox = document.getElementById(`flexCheckIndeterminate${index}`);

    if (checkbox.checked) {

      const updatedData1 = [...data1];

      updatedData1[index] = [...updatedData1[index]];
      updatedData1[index][4] = location.state.id;
      updatedData1[index].itemName = updatedData1[index][0];
      updatedData1[index].quantity = updatedData1[index][1];
      updatedData1[index].category = updatedData1[index][2];
      updatedData1[index].request_number = updatedData1[index][3];
      updatedData1[index].accepted_by = location.state.id;
      setData1(updatedData1);
      console.log("uuu  ", updatedData1);
      setSelectedElements((prevSelected) => [...prevSelected, [...updatedData1[index],index]]);
    } else {
      const elementIndex = selectedElements.findIndex((elem) => elem[0] === data1[index][0]);
      const sel = [...selectedElements];
      sel.splice(elementIndex, 1);
      setSelectedElements(sel);
      const updatedData1 = [...data1];
      updatedData1[index] = [...updatedData1[index]];
      updatedData1[index][4] = "pending";
      updatedData1[index].itemName = updatedData1[index][0];
      updatedData1[index].quantity = updatedData1[index][1];
      updatedData1[index].category = updatedData1[index][2];
      updatedData1[index].request_number = updatedData1[index][3];
      updatedData1[index].accepted_by = "pending";
      setData1(updatedData1);
      // console.log("uuu  ",updatedData1);
    }
    
    // console.log("data11", selectedElements);
  };
  const handleSelection1 = (index) => {
    const checkbox = document.getElementById(`flexCheckIndeterminate1${index}`);

   
   
      const elementIndex = selectedElements.findIndex((elem) => elem[0] === data1[index][0]);
      const sel = [...selectedElements];
      sel.splice(elementIndex, 1);
      setSelectedElements(sel);
      const updatedData1 = [...data1];
      updatedData1[index] = [...updatedData1[index]];
      updatedData1[index][4] = "pending";
      updatedData1[index].itemName = updatedData1[index][0];
      updatedData1[index].quantity = updatedData1[index][1];
      updatedData1[index].category = updatedData1[index][2];
      updatedData1[index].request_number = updatedData1[index][3];
      updatedData1[index].accepted_by = "pending";
      setData1(updatedData1);
      console.log("uuuzzzzzzzzz  ",updatedData1);
    

    
    console.log("ksldflskn", data1);
  };


  console.log('Selected Elements:', selectedElements);
  console.log('Data1:', data1);







  const handleAccept = async () => {
    if (account && contract && selectedElements.length > 0 && nz === 0) {
      // await contract.methods.save2(selectedElements).send({ from: account });
      await contract.methods.save11(data1).send({ from: account });
      setNz(1);
    }
  };


  return (
    <div className="AdstRequests">
      <Navbarasc />
      {/* <h1>ASC</h1> */}
      <div className="bg-image">
        <div className="container text-center">
          <div className="row">
            <div className="col"></div>
            <div className="col-15">
              <br />
              <br />
              <br />
              <br />
              <h1>ASC REQUESTS:</h1>
              <p id="accountArea">
                Connection Status: {account ? `Connected to Metamask (${account})` : 'NOT CONNECTED to Metamask'}
              </p>
              <p id="contractArea">
                Connection Status: {contract ? 'Connected to Smart Contract' : 'NOT CONNECTED to Smart Contract'}
              </p>
            </div>
            <div className="col"></div>
          </div>

          {dataFetched && data1.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                <th scope="col">Accept</th>
                  <th scope="col">Item Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Unit name</th>
                  <th scope="col">Request no.</th>
                 
                  
                </tr>
              </thead>
              <tbody>
                {data1
                  .map((item, index) => ({ item, index }))
                  .filter(({ item }) => item[4] === "pending" && item[2] !== location.state.id)
                  .map(({ item, index }) => (
                    <tr key={index}>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id={`flexCheckIndeterminate${index}`}
                            onChange={() => handleSelection(index)}
                          />
                          <label className="form-check-label" htmlFor={`flexCheckIndeterminate${index}`}>
                            Accept
                          </label>
                        </div>
                      </td>
                      <td>{item[0]}</td>
                      <td>{item[1]}</td>
                      <td>{item[2]}</td>
                      <td>{item[3]}</td>
                      
                      
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <p>Loading data...</p>
          )}
          <br />
          <br />
          <br />
          {selectedElements.length > 0 && (
            <>
              <h2>Selected Elements:</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Unit name</th>
                    <th scope="col">Request no.</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  
                  selectedElements.map((selectedItem, index) => (
                    <tr key={index}>
                      <td>{selectedItem[0]}</td>
                      <td>{selectedItem[1]}</td>
                      <td>{selectedItem[2]}</td>
                      <td>{selectedItem[3]}</td>
                      <td>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            checked={!selectedElements.some((elem) => elem[5] === index)}
                            // defaultChecked={true}
                            id={`flexCheckIndeterminate1${selectedItem[5]}`}
                            onChange={() => handleSelection1(selectedItem[5])}
                          />
                          <label className="form-check-label"  htmlFor={`flexCheckIndeterminate1${selectedItem[5]}`}>
                            Accepted
                          </label>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}
          <div className="col">
            <button type="button" className="btn btn-success mb-3" onClick={handleAccept}>
              ACCEPT
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default AdstRequests;
