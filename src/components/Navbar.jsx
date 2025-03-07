import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../layouts/MainLayout";

export default function Navbar() {
    const {handleLogOut} = useContext(AuthContext)
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/about"}>
        <button>About</button>
      </Link>
      <Link to={"/signUp"}>
        <button>Sign Up</button>
      </Link>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/profile"}>
        <button>Profile</button>
      </Link>
      <button onClick={handleLogOut} className="">
        Login Out
      </button>

    </div>
  );
}
