import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { database } from "./firebase";

const Login = () => {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type == "signup") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          history("/");
        })
        .catch((err) => {
          window.alert(err.message);

          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          history("/");
        })
        .catch((err) => {
          window.alert(err.message);
        });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${"../assets/homepage-bg.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-md w-full p-6 space-y-6 rounded-xl shadow-lg bg-white">
        <div className="flex justify-center space-x-5">
          <div
            className={login === false ? "activeColor" : "pointer"}
            onClick={() => setLogin(false)}
          >
            Sign Up
          </div>
          <div
            className={login === true ? "activeColor" : "pointer"}
            onClick={() => setLogin(true)}
          >
            Sign In
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 text-center">
          {login ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => handleSubmit(e, login ? "signin" : "signup")}
          className="grid grid-cols-1 gap-y-5"
        >
          <input
            name="email"
            type="email"
            className="block w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Email"
          />
          <input
            name="password"
            type={login ? "password" : "password"}
            className="block w-full p-3 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Password"
          />
          <button
            className="w-full bg-gray-900 text-white p-3 rounded-md"
            type="submit"
          >
            {login ? "Sign In" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
