import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
// import { useState } from "react";
import Navbar from "./components/navbar";
import Adst1 from './ADST1';


function Login() {
    const [see, setalert] = useState('');
    const history = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/", {
                email, password
            })
                .then(res => {
                    { console.log(res.data.role) }
                    if (res.data.status == "exist") {
                        if (res.data.role == "ASC") {
                            history("/ASC", { state: { id: email, role: res.data.role } })
                        }
                        if (res.data.role == "ADST") {
                            history("/ADST1", { state: { id: email, role: res.data.role } })
                        }
                        if (res.data.role == "DDST") {
                            history("/DDST1", { state: { id: email, role: res.data.role } })
                        }
                    }
                    else if (res.data == "fail") {
                        alert("Wrong credentials")
                        setalert("enter correct details")
                    }
                    else if (res.data == "wrong credentials") {
                        alert("Wrong credentials")
                    }
                    else if (res.data == "notexist") {
                        alert("User have not sign up")
                    }
                })
                .catch(e => {
                    alert("wrong details")
                    // console.log(e);
                })
        }
        catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card text-center">
                    <div className="card-header">
                        <h1>Login</h1>
                    </div>
                    <div className="card-body">
                        {/* <h1 className="card-title">Login</h1> */}
                        <form onSubmit={submit}>
                            <div className="form-group">
                            <div className="text-start">
                            <label>Enter UserName:</label>
                            </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="UserID"
                                />
                                
                            </div>
                            <div className="form-group mt-3 ">
                                <div className="text-start">
                                <label >Enter Password:</label>
                                </div>
                            
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3" onClick={submit}>
                                Submit
                            </button>
                            {/* <p className="text-danger">{error}</p> */}
                        </form>
                        
                    </div>

                </div>
            </div>



           
        </div>


    )
}

export default Login

