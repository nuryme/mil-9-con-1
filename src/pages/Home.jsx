import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export default function Home() {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log("ERROR: ", error.message);
      });
  };


  const handleGitHub = () => {
    signInWithPopup(auth, githubProvider).then((result) => {
      console.log(result.user);
    })
    .catch((error) => {
      console.log('ERROR: ', error.message)
    }
    )
  };

  return (
    <div>
      <button onClick={handleGoogle} className="">
        Login With Google
      </button>
      <button onClick={handleGitHub} className="">
        Login With GitHub
      </button>
    </div>
  );
}
