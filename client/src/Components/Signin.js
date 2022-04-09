import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Assets/signin.css'

const Signin = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const loginUser = async (e) => {
        e.preventDefault();

        const res = await fetch('/signin', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email, password: password
            })
        });
        const data = await res.json();

        if (res.status === 400 || !data) {
            window.alert("Invalid email/password");
            console.log("Invalid login");
        }
        else if (res.status === 422) {
            window.alert("Login Successful");
            console.log("Login Successful");

            history.push("/userHome");
        }
        else if (res.status === 201) {
            window.alert("Admin Login Successfull");
            console.log("Admin Login SuccessFull");
            // history.push("/adminpanel");
            history.push("/adminhome");
        }
    }
    return (

        <>
            <section>
                <div class="container border border-5 rounded-3 background_img">
                    <div class="container text-center paddingtitle mb-3 my-3">
                        <h3><u class="fs-1">SignIn Details</u></h3>
                    </div>
                    <form method="">
                        <div className="row my-5" >
                            <div className="col-md-6 offset-md-3">
                                <div class="container">
                                    <div className="form-floating mb-3">
                                    
                                        {/* <span className="symbol">
                                            <i class="zmdi zmdi-email material-icons-name"></i>
                                        </span>
                                        &nbsp;&nbsp;&nbsp; */}
                                        <input type="email" name="email" class="form-control" id="floatingUserEmailInput" autoComplete="off" placeholder="Enter Your Email"
                                            value={email} onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label for="floatingInput">User Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        {/* <span className="symbol">
                                            <i class="zmdi zmdi-lock material-icons-name"></i>
                                        </span>
                                        &nbsp;&nbsp;&nbsp; */}
                                        <input type="password" name="password" class="form-control" id="floatingPasswordInput" autoComplete="off" placeholder="Enter Your Password"
                                            value={password} onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <label for="floatingInput">Password</label>
                                    </div>
                                </div>
                                <div className="container text-center my-4">
                                    <input class="btn btn-success text-black" type="submit" name="signin"
                                        id="signin" value="Login" onClick={loginUser}></input>
                                </div>
                            </div>
                        </div>
                    </form>

                    {/* <div className="link">
                        <NavLink className='nav-link active' to="/signup">Sign up?</NavLink>
                    </div> */}
                </div>
            </section>
        </>
    )
}

export default Signin