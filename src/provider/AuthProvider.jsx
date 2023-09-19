/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { createContext } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { useState } from "react";
import { useEffect } from "react";
import app from './../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googeProvider = new GoogleAuthProvider()


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoader] = useState(true)

  const gooleLogin = ()=>{
    setLoader(true)
    return signInWithPopup(auth, googeProvider)
  }

  const registerUser = (email, password) => {
    setLoader(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoader(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      setLoader(false)
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = { registerUser, gooleLogin, user, logOut, loginUser, loading };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
