/* eslint-disable no-unused-vars */
import SocialLoginBtn from "./../SocialLoginBtn/SocialLoginBtn";
import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import './register.css'
import { Link } from "react-router-dom";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    const form = event.target
    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
          form.reset()
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border border-1  rounded w-100 m-auto p-5 form_card">
              <h2 className="text-center mb-4">Register</h2>
              <form action="">
                <div className="form-register">
                  <div className="name-field">
                    <label htmlFor="name">Name</label>
                    <br/>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      className="email r_input-field p-3 mt-1 mb-1"
                      type="text"
                      placeholder="enter your Name"
                      required
                    />
                  </div>

                  <div className="email-field">
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="email p-3 mt-1 mb-1 r_input-field"
                      type="email"
                      placeholder="enter your email"
                    />
                  </div>
                  <div className="phone-field">
                    <label htmlFor="phone">Phone</label>
                    <br/>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className="email p-3 mt-1 mb-1 r_input-field"
                      type="number"
                      placeholder="enter your phone number"
                    />
                  </div>
                  <div className="pass-field">
                    <label htmlFor="password">Password</label>
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      className="password p-3 mt-1 mb-1 r_input-field "
                      type="text"
                      placeholder="type your password"
                    />
                  </div>
                </div>
                <button
                  onClick={handleRegistration}
                  className="btn btn-info me-5 register_btn p-2 mt-3"
                >
                  Register
                </button>
                <p className="p-2">
                  <small className="text-black fs-5">
                    already have account? <Link to = "/login" className="fw-bold fs-3 text-decoration-none">Login</Link>
                  </small>
                </p>
                <SocialLoginBtn className="gogle-login_btn"></SocialLoginBtn>
              </form>
            </div>
            <p className="text-danger">{error}</p>
          </div>

          <div className="col-md-6 ml-5">
            <img
              className="img-fluid rounded"
              src="https://i.ibb.co/Vmyggr3/undraw-Login-re-4vu2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
