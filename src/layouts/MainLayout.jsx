import React, { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

export const AuthContext = createContext();

export default function MainLayout() {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogle = () => {
      setLoading(true);
    signInWithPopup(auth, googleProvider).then((result) => {
      // console.log(result);
      setUser(result.user);
      setLoading(false);
    });
    //   .catch((error) => {
    //     console.log("ERROR: ", error.message);
    //   });
  };

  const handleGitHub = () => {
      setLoading(true);
    signInWithPopup(auth, githubProvider).then((result) => {
      setUser(result.user);
      setLoading(false);
    });
    //   .catch((error) => {
    //     console.log("ERROR: ", error.message);
    //   });
  };

  //Registration
  const handleSignUp = (email, password) => {
      setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  };

  const handleSignIn = (email, password) => {
      setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setUser(result);
        setLoading(false);
      })
      .catch((error) => console.log(error.message));
  };

  const handleLogOut = () => {
      setLoading(true);
    signOut(auth).then(() => {
      setLoading(false);
      console.log("Logged Out Successfully");
    });
  };

  useEffect(() => {
    console.log("user state: ", user);
  }, [user]);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    handleGitHub,
    handleGoogle,
    user,
    setUser,
    handleLogOut,
    handleSignUp,
    handleSignIn,
    loading,
  };

  return (
    <div>
      <AuthContext.Provider value={authData}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </AuthContext.Provider>
    </div>
  );
}
