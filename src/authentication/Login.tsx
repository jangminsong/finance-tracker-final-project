import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

import "../style.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <img
        className="w-1/3 mb-4 flex justify-center items-center"
        src="https://www.bates.edu/communications-marketing/files/2017/05/bates-wordmark-201.png"
        alt="Instagram Logo"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        className="border border-black hover:border-blue-500 focus:border-blue-500 focus:outline-none px-4 py-2 rounded-md"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
        className="border border-black hover:border-blue-500 focus:border-blue-500 focus:outline-none px-4 py-2 rounded-md"
      />
      <button
        onClick={handleLogin}
        className="border border-gray-900 hover:bg-gray-500 hover:text-white text-gray-500 font-bold py-2 px-4 rounded mt-3 ml-9"
      >
        Log in
      </button>
    </div>
  );
}

export default Login;
