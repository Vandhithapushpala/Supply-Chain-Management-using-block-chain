import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import {ABI,Address} from './aa';

const Ddst1 = () =>{
    const [account, setAccount] = useState('');
    const [contract, setContract] = useState(null);
    useEffect(() => {
        connectMetamask();
        connectContract();
        readWord1();
        readWord2();
        readWord3();
        yy();
      }, []);
    // useEffect()
    
      const connectMetamask = async () => {
        if (typeof window.ethereum !== 'undefined') {
            console.log("jhdwhef");
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const account = accounts[0];
          setAccount(account);
          document.getElementById("142").innerHTML="connected "+account;
        }
      };
     
    
      const connectContract = async () => {
        console.log("aaa",Address);
          const web3 =  new Web3(window.ethereum);
          const contract = new web3.eth.Contract(ABI, Address);
          setContract(contract);
          document.getElementById("143").innerHTML="connected";
      };
      const readWord1 = async () => {
        let z = 0;
        let s = 0;
  
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        var st = "";
        var k;
        let se = "";
        let sf = "";
        let qa = "";
        let ta = "";
        const data = await window.contract.methods.tt1().call();
        const count = await window.contract.methods.showcount1().call();
      //   console.log(count);
        console.log("iiiiiihhhhhhhhhhh",data);
        if (s == 0) {
          let su = 0;
          k = count[0];
          var k1 = 0;
  
          var i1 = 0;
          var ci = data.length;
  
          let y = 0;
          let i = 0;
          let qr = "";
          for (let i = 0; i < count.length; i++) {
            st += `<div class="card" style="width: 35rem">
          <div class="card-body" id="${i}21">
            <h5 class="card-title">REQUEST ${i}</h5>
            <div class='table-responsive'>
            <table class="table" id="${i}11"> 
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody >
              </tbody>
            </table>
            </div>
          </div>
          </div><br>`;
            
  
          }
          document.getElementById("1").innerHTML += st;
        
          let x=0;
          let r = 0;
          var v = 0;
          let z2 = 0;
          while (ci != 0) {
            let z1 = count[i1];
            se = "";
            sf = "";
            qa = "";
            let t="";
  
            while (z1 != 0) {
              let r2 = "";
              let e1 = "";
              sf += `<tr>
                          
                          <td>${data[k1].itemName}</td>
                          <td>${data[k1].category}</td>
                          </tr> `
              
              k1++;
              z1--;
              z2++;
  
            }
            v++;
            ci=window.BigInt(ci)-count[i1];
            i1++;
  
            document.getElementById(`${r}11`).innerHTML += sf;
  
  
            r++;
  
  
          }
         
          
  
  
        }
        s += 1;
  
      }
      const readWord2 = async () => {
        let z = 0;
        let s = 0;
  
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        var st = "";
        var k;
        let se = "";
        let sf = "";
        let qa = "";
        let ta = "";
        const data = await window.contract.methods.tt2().call();
        const count = await window.contract.methods.showcount2().call();
        console.log("hhhuuuu",data);
        if (s == 0) {
          let su = 0;
          k = count[0];
          var k1 = 0;
  
          var i1 = 0;
          var ci = data.length;
  
          let y = 0;
          let i = 0;
          let qr = "";
          for (let i = 0; i < count.length; i++) {
            st += `<div class="card" style="width: 35rem">
          <div class="card-body" id="${window.BigInt(i)}22">
            <h5 class="card-title">REQUEST ${i}</h5>
            <div class='table-responsive'>
            <table class="table" id="${window.BigInt(i)}12"> 
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody >
              </tbody>
            </table>
            </div>
          </div>
          </div><br>`;
  
            
          }
          document.getElementById("2").innerHTML += st;
        
          let x=0;
          let r = 0;
          var v = 0;
          let z2 = 0;
          while (ci != 0) {
            let z1 = count[i1];
            se = "";
            sf = "";
            qa = "";
            let t="";
  
            while (z1 != 0) {
              let r2 = "";
              let e1 = "";
              sf += `<tr>
                          
                          <td>${data[k1][0]}</td>
                          <td>${data[k1][1]}</td>
                          </tr> `
             
              k1++;
              z1--;
              z2++;
              
            
  
            }
  
  
            console.log("qa", sf);
            v++;
            console.log("c",ci)
            console.log("c111",window.BigInt(ci))
            
            ci=window.BigInt(ci)-count[i1];
            i1++;
  
            document.getElementById(`${window.BigInt(r)}12`).innerHTML += sf;
  
  
            r++;
  
  
          }
         
          
  
  
        }
        s += 1;
  
      }
      const readWord3 = async () => {
        let z = 0;
        let s = 0;
  
        window.web3 = await new Web3(window.ethereum);
        window.contract = await new window.web3.eth.Contract(ABI, Address);
        var st = "";
        var k;
        let se = "";
        let sf = "";
        let qa = "";
        let ta = "";
        const data = await window.contract.methods.tt3().call();
        const count = await window.contract.methods.showcount3().call();
      //   console.log(count);
      //   console.log(data);
        if (s == 0) {
          let su = 0;
          k = count[0];
          var k1 = 0;
  
          var i1 = 0;
          var ci = data.length;
  
          let y = 0;
          let i = 0;
          let qr = "";
          for (let i = 0; i < count.length; i++) {
            st += `<div class="card" style="width: 35rem">
          <div class="card-body" id="${i}23">
            <h5 class="card-title">REQUEST ${i}</h5>
            <div class='table-responsive'>
            <table class="table" id="${i}13"> 
              <thead>
                <tr>
                  <th scope="col">Item</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody >
              </tbody>
            </table>
            </div>
            
          </div>
          </div><br>`;
  
           
          }
          document.getElementById("3").innerHTML += st;
        
          let x=0;
          let rey=[];
          let r = 0;
          var v = 0;
          let z2 = 0;
          while (ci != 0) {
            let z1 = count[i1];
            se = "";
            sf = "";
            qa = "";
            let t="";
  
            while (z1 != 0) {
              let r2 = "";
              let e1 = "";
              sf += `<tr>
                          
                          <td>${data[k1][0]}</td>
                          <td>${data[k1][1]}</td>
                          </tr> `
             
                  rey.push([data[k1][0],data[k1][1]]);
                 
  
              k1++;
              z1--;
              z2++;
              
            
  
            }
  
  
  
           
  
            v++;
            ci=window.BigInt(ci)-count[i1];
            
  
            i1++;
  
            document.getElementById(`${r}13`).innerHTML += sf;
  
  
            r++;
  
  
          }
         
          
  
  
        }
        s += 1;
  
      }
      const z11 = async (id) => {
        let idd=id;
        var qe1=0;
        var qe2=0;
        var qe3=0;
        window.web3 = await new Web3(window.ethereum);
          window.contract = await new window.web3.eth.Contract(ABI, Address);
          if(idd==1){
            const s1 = await window.contract.methods.tt1().call();
          console.log("suiiiiiii",s1);
          if(qe1==0 && s1.length!=0){
          await window.contract.methods.dgst1(s1).send({ from: account });
          qe1+=1;
        }
    
          }
          if(idd==2){
            const s1 = await window.contract.methods.tt2().call();
          console.log("suiiiiiii",s1);
          if(qe2==0 && s1.length!=0){
          await window.contract.methods.dgst1(s1).send({ from: account });
          qe2+=1;
        }
    
          }
          if(idd==3){
            const s1 = await window.contract.methods.tt3().call();
          console.log("suiiiiiii",s1);
          if(qe3==0 && s1.length!=0){
          await window.contract.methods.dgst1(s1).send({ from: account });
          qe3+=1;
        }
    
          }
          
    
      }
      const yy = async () =>{
        console.log("agfhrb")
        window.web3 = await new Web3(window.ethereum);
          window.contract = await new window.web3.eth.Contract(ABI, Address);
          const data = await window.contract.methods.retresreq().call();
          const s1 = await window.contract.methods.tt1().call();
          console.log("s111",s1);
            const s2 = await window.contract.methods.tt2().call();
            const s3 = await window.contract.methods.tt3().call();
          console.log("dataaa",data);
            
          let st="";
          let ee="";
          let i1=0;
          if(s1.length!=0){
              ee+=`
              <tr>
                <td id="r1"></td>
                <td>ADST1</td>
                <td><button id="t1">pending</button></td>
              </tr>
              `;
            }
            if(s2.length!=0){
              ee+=`
              <tr>
                <td id="r2"></td>
                <td>ADST2</td>
                <td><button id="t2">pending</button></td>
              </tr>
              `;
            }
            if(s3.length!=0){
              ee+=`
              <tr>
                <td id="r3"></td>
                <td>ADST3</td>
                <td><button id="t3">pending</button></td>
              </tr>
              `;
            }
            let c1=0;
            let c2=0;
            let c3=0;
            let r="";
            document.getElementById("tt").innerHTML += ee;
          for(let i=0;i<data.length;i++){
            if(data[i].unit=="ADST1"){
              if(data[i].stat=="1"){
                console.log("dddd",`${data[i].statusByUnit}`)
                r=`${data[i].statusByUnit}`
                document.getElementById("r1").innerHTML = r;
                document.getElementById("t1").innerHTML = "Accepted";
                c1+=1;
              }
            }
            if(data[i].unit=="ADST2"){
              if(data[i].stat=="1"){
                document.getElementById("r2").innerHTML = `${data[i].statusByUnit}`;
                document.getElementById("t2").innerHTML = "Accepted";
                c1+=1;
              }
            }
            if(data[i].unit=="ADST3"){
              if(data[i].stat=="1"){
                document.getElementById("r3").innerHTML = `${data[i].statusByUnit}`;
                document.getElementById("t3").innerHTML = "Accepted";
                c1+=1;
              }
            }
            
          }
          
    
          }
          const parot = async () =>{
            var arey=[];
            window.web3 = await new Web3(window.ethereum);
            window.contract = await new window.web3.eth.Contract(ABI, Address);
            const s1 = await window.contract.methods.tt1().call();
            const s2 = await window.contract.methods.tt2().call();
            const s3 = await window.contract.methods.tt3().call();
            const toa = await window.contract.methods.retdgst1().call();
            console.log("jsdk",toa);
            if(s1.length!=0){
              if(document.getElementById("t1").innerHTML=="pending"){
              for(let i=0;i<toa.length;i++){
                if(toa[i].category=="ADST1"){
                  console.log("88888888888888")
                  arey.push([toa[i].itemName,toa[i].quantity,toa[i].category]);
                }
              }
            }
            }
            if(s2.length!=0){
              if(document.getElementById("t2").innerHTML=="pending"){
              for(let i=0;i<toa.length;i++){
                if(toa[i].category=="ADST2"){
                  arey.push([toa[i].itemName,toa[i].quantity,toa[i].category]);
                }
              }
            }
            }
            
            
            if(s3.length!=0){
              if(document.getElementById("t3").innerHTML=="pending"){
              for(let i=0;i<toa.length;i++){
                if(toa[i].category=="ADST3"){
                  arey.push([toa[i].itemName,toa[i].quantity,toa[i].category]);
                }
              }
            } 
            }
            console.log("booo",arey);
            var qw=0;
            if(qw==0){
              console.log("heyyy");
              await window.contract.methods.toasc(arey).send({ from: account });
              qw+=1;
            }
        
        
        
          }
      return(
        <div>
          <h1>DDST1</h1>
            <div id="142">not connected to Metamask</div>
            <div id="143">not connected to Contract</div>
           
            <div className="container text-center">
            <div className="row">
              <div className="col">
                
              </div>
              <div className="col">
                
                <h1>ADST1:</h1>
                <br></br>
                <div id="1"></div>
                <button type="button" className="btn btn-primary" onClick={() => z11(3)}>
                  Send request to other units
                </button>
                <h1>ADST2:</h1>
                <br></br>
                
                <div id="2"></div>
                <button type="button" className="btn btn-primary" onClick={() => z11(3)}>
                  Send request to other units
                </button>
                <h1>ADST3:</h1>
                <br></br>
                <div id="3"></div>
                <button type="button" className="btn btn-primary" onClick={() => z11(3)}>
                  Send request to other units
                </button>
                <h1>STATUS OF THE REQUESTS:</h1>
              <br></br>
              <div className='table-responsive'>
            <table class="table">
              <thead>
                <tr>
                
                
                <th scope="col">status by</th>
                <th scope="col">order from</th>
                <th scope="col">accepted/denied</th>
                </tr>
              </thead>
              <tbody id="tt">
                
              </tbody>
              </table>
              </div>
              <button  type="button" onClick={()=>parot()} className="btn btn-success">SEND PENDING REQUESTS TO ASC</button> <br></br><br></br><br></br>
              </div>
              
              <div className="col">
                
              </div>
            </div>
          </div>
        </div>
      );
}
export default Ddst1;