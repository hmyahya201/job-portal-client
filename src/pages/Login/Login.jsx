/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import SocialLoginBtn from "../SocialLoginBtn/SocialLoginBtn";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import './login.css'
import { Link } from "react-router-dom";

// import { useLocation, useHistory, useNavigate } from "react-router";

const Login = () => {
  const { loginUser, gooleLogin } = useContext(AuthContext);
  // const location = useLocation();
  // const history = useHistory();
  // let navigate = useNavigate();

  const handleGoogleLogin = ()=>{
    gooleLogin()
  }
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(email, password)

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          // navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center pt-5 pb-5">
          <div className="col-md-6 ">
            <div className="border rounded w-100 m-auto p-5 login-form">
              <h2 className="fs-2 fw-bold mb-3 text-center">Login</h2>
              <form action="">
                <div>
                  <label htmlFor="email">Email</label>
                  <br />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-3 m-2 login_input"
                  type="email"
                  placeholder="enter your email"
                />
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <br />
                  <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="password p-3 m-2 login_input"
                  type="password"
                  placeholder="enter your password"
                />
                </div>
                <button
                  onClick={handleLogin}
                  className="btn login-btn btn-info p-2 mt-3"
                >
                  Login
                </button>
                <p className="p-2">
                  <small className="text-blck fs-5">
                    are you new? register here <Link to="/register" className="fw-bold fs-4 text-decoration-none">Register</Link>
                  </small>
                </p>
              </form>
              <SocialLoginBtn></SocialLoginBtn>
            </div>
          </div>
          <div  className="col-md-6">
            <img
              onClick={handleGoogleLogin}
              className="w-100"
              src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
              alt=""
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
