import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";

import "../style.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, { displayName: username })
        )
      )
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div>
      <img
        className="w-1/3 mb-4 flex justify-center items-center"
        src="https://www.bates.edu/communications-marketing/files/2017/05/bates-wordmark-201.png"
        alt="Bates Logo"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        value={email}
        className="border border-black hover:border-blue-500 focus:border-blue-500 focus:outline-none px-4 py-2 rounded-md mb-3"
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        value={username}
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
        className="border border-gray-900 hover:bg-gray-500 hover:text-white text-gray-500 font-bold py-2 px-4 rounded mt-3 ml-9"
        onClick={handleSignup}
      >
        Sign Up
      </button>
    </div>
  );
}

export default Signup;
