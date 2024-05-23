import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";

function Authentication() {
  const [active, setActive] = useState("login");

  const handleChange = () => {
    setActive(active === "login" ? "signup" : "login");
  };

  return (
    <div className="flex min-h-screen bg-red-900">
      <div className="w-1/2 bg-white flex items-center justify-center">
        <img
          src="https://www.bates.edu/communications-marketing/files/2013/01/bobcat-B-thumbnail-384x500.jpg"
          alt="Logo"
          className="w-2/3"
        />
      </div>
      <div className="w-1/2 bg-red-900 flex items-center justify-center">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-8">
          {active === "login" ? <Login /> : <Signup />}
          <div className="mt-6">
            <span className="text-red-900">
              {active === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    onClick={handleChange}
                    className="text-red-800 hover:underline focus:outline-none"
                  >
                    Sign Up
                  </button>
                </>
              ) : (
                <>
                  Have an account?{" "}
                  <button
                    onClick={handleChange}
                    className="text-red-900 hover:underline focus:outline-none"
                  >
                    Log In
                  </button>
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authentication;
