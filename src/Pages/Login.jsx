import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await signInWithEmailAndPassword(auth, name, email, password);
      console.log("Account Created");
    } catch (error) {
      console.log(error);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
        onSubmit={onSubmitHandler}
      >
        <div className="inline-flex items-center gap2 mb-2 mt-10">
          <p className="prata-regular text-3xl ">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
        </div>
        {currentState === "Login" ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Name"
            required
            className="w-full px-3 py-2 border border-gray-800"
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full px-3 py-2 border border-gray-800"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full px-3 py-2 border border-gray-800"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot your password?</p>
          {currentState === "Login" ? (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Sign Up")}
            >
              Create account
            </p>
          ) : (
            <p
              className="cursor-pointer"
              onClick={() => setCurrentState("Login")}
            >
              Login Here
            </p>
          )}
        </div>
        <button className="bg-black text-white font-light px-8 py-2 mt-4 rounded">
          {currentState === "Login" ? "Sign In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
