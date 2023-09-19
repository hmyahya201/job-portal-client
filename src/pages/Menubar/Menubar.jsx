/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSearch } from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
// import { Link } from 'react-router-dom';
const Menubar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user?.email);
  const handleLogout = () => {
    logOut()
      .then()
      .catch((err) => {
        console.log(err);
      });
  };
  return (


    <Navbar collapseOnSelect expand="lg" className="job_nav">
    <Container>
      <Nav.Link href="/">
      <Navbar.Brand >
      <h3 className='logo'>Job<FaSearch className='pl-0.5' color="white" fontSize="1em" />Portal</h3>
      </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto menu-bar">
        <Nav.Link className='menu-item' href="/">Home</Nav.Link>
          <Nav.Link className='menu-item' href="/MyJobs">
           My Job
         </Nav.Link>
          <Nav.Link className='menu-item' href="/all-jobs">
           All Jobs
         </Nav.Link>
          <Nav.Link className='menu-item' href="/addJob">Post Job</Nav.Link>
          <Nav.Link className='menu-item' href="/register">Register</Nav.Link>
          {user?.email ? (
            <li className="p-2">
              <button className='menu-item' onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <Nav.Link className='menu-item'  href="/login">
              <li>Login</li>
            </Nav.Link>
          )}
        </Nav>
        <Nav>
          <p>g-mail pik</p>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Menubar;
