import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
// import { useState } from "react";
import Navbar from "./components/navbar";
import Adst1 from './ADST1';


function Login() {
    const [see, setalert] = useState('');
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{
            
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then(res=>{
                {console.log(res.data.role)}
                if(res.data.status=="exist"){
                    if(res.data.role=="ASC"){
                        history("/ASC",{state:{id:email , role:res.data.role}})
                    }
                    if(res.data.role=="ADST"){
                        history("/ADST1",{state:{id:email, role:res.data.role}})
                    }
                    if(res.data.role=="DDST"){
                        history("/DDST1",{state:{id:email, role:res.data.role}})
                    }

                    
                }
                else if(res.data=="fail"){
                    alert("Wrong credentials")
                    setalert("enter correct details")
                }
                else if(res.data=="wrong credentials"){
                    alert("Wrong credentials")
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                // console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">
            <Navbar/>

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />
                <p ><span className="red-text">{see}</span></p>

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Login