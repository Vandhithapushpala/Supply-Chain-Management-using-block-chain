import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function SignUp() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [role,setRole]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/signup",{
                email,password,role
            })
            .then(res=>{
                if(res.data=="exist"){
                    alert("User already exists")
                }
                else if(res.data=="notexist"){
                    history("/",{state:{id:email}})
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div>
            <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
                <div className="card text-center">
                    <div className="card-header">
                        <h1>SignUp</h1>
                    </div>
                    <div className="card-body">
                        {/* <h1 className="card-title">Login</h1> */}
                        <form onSubmit={submit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="UserID"
                                />
                            </div>
                            <div className="form-group mt-3 ">
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="form-group mt-3 ">
                                <input
                                    type="Role"
                                    className="form-control"
                                    value={role}
                                    onChange={(e) => { setRole(e.target.value) }} 
                                    placeholder="Role"
                                />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3" onClick={submit}>
                                Submit
                            </button>
                            {/* <p className="text-danger">{error}</p> */}
                        </form>
                        <div className="mt-3">
                            <p>OR</p>
                            <Link to="/">login Page</Link>
                            {/* <Link to="/Authenticate/Signup" className="btn btn-secondary">
              Signup Page
            </Link> */}
                        </div>
                    </div>

                </div>
            </div>



            
        </div>


        // <div className="login">

        //     <h1>Signup</h1>

        //     <form action="POST">
        //         <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
        //         <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
        //         <input type="text" onChange={(e) => { setRole(e.target.value) }} placeholder="Role" />
        //         <input type="submit" onClick={submit} />

        //     </form>

        //     <br />
        //     <p>OR</p>
        //     <br />

        //     <Link to="/">Login Page</Link>

        // </div>
    )
}

export default SignUp