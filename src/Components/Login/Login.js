import React, { useState } from "react";
import LOGO from "../../Assets/Chef_Circle-removebg-preview.png";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //   const navigate = useNavigate();
  //   const location = useLocation();
  //   const from = location?.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginBtn = async (event) => {
    event.preventDefault();
    console.log(email, " >>> ", password);
    // For Actual Login
    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: email,
    //     password: password,
    //   }),
  };

  return (
    <div className="lg:grid grid-cols-2 justify-items-center place-items-center bg-slate-800 h-screen p-20">
      <div className="bg-slate-800">
        {" "}
        <img className="w-1/2 lg:w-5/6 mx-auto bg-slate-800" src={LOGO} />{" "}
      </div>{" "}
      {/* Login Form */}
      <div className="bg-slate-900 rounded-3xl">
        {" "}
        <div className="text-white lg:mx-auto md:mx-40 sm:mx-20 sm:p-10 md:p-14 mx-5 p-5 rounded-3xl lg:max-w-fit grid grid-cols-1 shadow-2xl">
          <h1 className="text-2xl mb-8 font-semibold"> SIGN IN </h1>{" "}
          <form onSubmit={handleLoginBtn}>
            <div>
              <input
                required
                onBlur={handleEmailBlur}
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mb-7 bg-white text-black"
              />
              <input
                required
                onBlur={handlePasswordBlur}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full bg-white text-black"
              />{" "}
              {error ? <h1 className="text-error"> {error} </h1> : <></>}{" "}
              <input
                type="submit"
                value="Login"
                className="mt-10 w-40 px-4 py-1.5 rounded-3xl text-white border-2 border-gray-700 bg-orange-400 hover:bg-orange-600"
              />
            </div>
          </form>{" "}
          <div className="">
            <h1 className="mt-12">
              Dont 't have an account?{" "}
              <span className="text-orange-400 hover:text-orange-600 font-semibold ml-2">
                <a href="/signup"> Sign Up </a>{" "}
              </span>{" "}
            </h1>{" "}
          </div>{" "}
        </div>
      </div>{" "}
    </div>
  );
};

export default Login;
