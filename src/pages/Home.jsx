import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../layouts/MainLayout";

export default function Home() {
    const {handleGitHub, handleGoogle, handleLogOut} = useContext(AuthContext)
  return (
    <div>
      <button onClick={handleGoogle} className="">
        Login With Google
      </button>
      <button onClick={handleGitHub} className="">
        Login With GitHub
      </button>
      <button onClick={handleLogOut} className="">
        Login Out
      </button>
      <Link to={'/about'}><button>About</button></Link>
      <Link to={'/signUp'}><button>Sign Up</button></Link>
      <Link to={'/login'}><button>Login</button></Link>
      <Link to={'/profile'}><button>Profile</button></Link>
    </div>
  );
}
