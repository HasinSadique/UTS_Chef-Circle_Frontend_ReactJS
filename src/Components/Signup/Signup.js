import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/signin";

  const [FirstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState();
  const [postalCode, setPostalCode] = useState();
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [response, setResponse] = useState("");
  const [showingPass, setShowingPass] = useState(false);
  const [showingConfirmPass, setShowingConfirmPass] = useState(false);

  const handleFirstNameBlur = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameBlur = (event) => {
    setLastName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handleStateBlur = (event) => {
    setState(event.target.value);
  };
  const handlePostalCodeBlur = (event) => {
    setPostalCode(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneNumberBlur = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handlePassBlur = (event) => {
    setPass(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };
  const handleShowPass = (event) => {
    document.getElementById("PasswordInput").setAttribute("type", "text");
    setShowingPass(true);
  };
  const handleDontShowPass = (event) => {
    document.getElementById("PasswordInput").setAttribute("type", "password");
    setShowingPass(false);
  };
  const handleShowConfirmPass = (event) => {
    document
      .getElementById("ConfirmPasswordInput")
      .setAttribute("type", "text");
    setShowingConfirmPass(true);
  };
  const handleDontShowConfirmPass = (event) => {
    document
      .getElementById("ConfirmPasswordInput")
      .setAttribute("type", "password");
    setShowingConfirmPass(false);
  };

  const handleRegisterBtn = (event) => {
    event.preventDefault();
    if (pass == confirmPass && pass.length != 0 && confirmPass.length != 0) {
      // Save to DB
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Fullname: FirstName + " " + lastName,
          address: address + " " + state + " " + postalCode,
          email: email,
          phoneNumber: phoneNumber,
          password: pass,
          Role: "Chef",
        }),
      };
      // console.log(requestOptions.body);

      fetch("http://localhost:5076/signup", requestOptions);
      // .then((res) => res.json())
      // .then((data) => {
      //   console.log(data);
      //   if (data.status == "Success" && data.user_id != 0) {
      //     alert(data.msg);
      //     // Change UI to signin page
      //     // googleSignOut();
      //     navigate(from, { replace: true });
      //   } else {
      //     setErrorMsg(data.msg);
      //   }
      // });
    } else {
      alert("Please enter the details correctly.");
    }
  };

  return (
    <div className=" grid grid-cols-1 items-center lg:py-40 md:py-20 py-10 px-5 bg-slate-800 text-white">
      <div>
        <h1 className="text-2xl mb-5 font-semibold"> SIGN UP </h1>{" "}
        <form
          onSubmit={handleRegisterBtn}
          className="bg-slate-900 lg:mx-auto md:mx-auto sm:mx-auto xs:mx-auto px-5 py-5 lg:p-14 xs:p-5 rounded-3xl lg:w-1/2 md:w-3/4 shadow-2xl"
        >
          <div>
            <div className="flex">
              <input
                onBlur={handleFirstNameBlur}
                type="text"
                placeholder="First Name"
                className="input input-bordered w-full lg:mr-10 mr-5 bg-white text-black"
              />
              <input
                onBlur={handleLastNameBlur}
                type="text"
                placeholder="Last Name"
                className="input input-bordered w-full bg-white text-black"
              />
            </div>{" "}
            <div class="label mb-4">
              <span class="label-text-alt text-red-500 text-center w-full">
                *** First and last name cannot be changed once registered
              </span>
              {/* <span class="label-text-alt">Bottom Right label</span> */}
            </div>
            <div className="flex">
              <input
                onBlur={handleEmailBlur}
                type="email"
                // defaultValue={email}
                // disabled={userGoogle ? true : false}
                placeholder="Email"
                className="input input-bordered w-full lg:mr-10 mr-5 bg-white text-black"
              />
              <input
                onBlur={handlePhoneNumberBlur}
                type="text"
                placeholder="Phone number"
                className="input input-bordered w-full bg-white text-black"
              />
            </div>{" "}
            <div class="label mb-4">
              <span class="label-text-alt text-red-500 text-center w-full">
                *** Email and phone number cannot be changed once registered
              </span>
              {/* <span class="label-text-alt">Bottom Right label</span> */}
            </div>
            <input
              onBlur={handleAddressBlur}
              type="text"
              placeholder="Address"
              className="input input-bordered w-full mb-4 bg-white text-black"
            />
            <div className="flex mb-4">
              <input
                onBlur={handleStateBlur}
                type="text"
                placeholder="State"
                className="input input-bordered w-full lg:mr-10 mr-5 bg-white text-black"
              />
              <input
                onBlur={handlePostalCodeBlur}
                type="text"
                placeholder="Postal code"
                className="input input-bordered w-full bg-white text-black"
              />
            </div>{" "}
            <div className="flex">
              <input
                id="PasswordInput"
                onBlur={handlePassBlur}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full mb-4 bg-white text-black"
              />{" "}
              {showingPass ? (
                <svg
                  onClick={handleDontShowPass}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-12 cursor-pointer border-2 p-1 rounded-md"
                >
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                </svg>
              ) : (
                <svg
                  onClick={handleShowPass}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-12 cursor-pointer border-2 p-1 rounded-md"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}{" "}
            </div>{" "}
            <div className="flex">
              <input
                id="ConfirmPasswordInput"
                onBlur={handleConfirmPassBlur}
                type="password"
                placeholder="Confirm Password"
                className="input input-bordered w-full bg-white text-black"
              />{" "}
              {showingConfirmPass ? (
                <svg
                  onClick={handleDontShowConfirmPass}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-12 cursor-pointer border-2 p-1 rounded-md"
                >
                  <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18zM22.676 12.553a11.249 11.249 0 01-2.631 4.31l-3.099-3.099a5.25 5.25 0 00-6.71-6.71L7.759 4.577a11.217 11.217 0 014.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113z" />
                  <path d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0115.75 12zM12.53 15.713l-4.243-4.244a3.75 3.75 0 004.243 4.243z" />
                  <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 00-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 016.75 12z" />
                </svg>
              ) : (
                <svg
                  onClick={handleShowConfirmPass}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-12 cursor-pointer border-2 p-1 rounded-md"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}{" "}
            </div>{" "}
          </div>{" "}
          <input
            className="rounded-xl text-white bg-orange-600 hover:bg-orange-500 btn mt-7"
            type="submit"
            value="Register"
          />
          <h1 className="text-error mt-3 "> {errorMsg} </h1>{" "}
          <h1 className="mt-7">
            Already have an account ?
            <span className="text-orange-500 font-semibold ml-2">
              <a href="/signin"> Sign In </a>{" "}
            </span>{" "}
          </h1>{" "}
        </form>{" "}
      </div>{" "}
    </div>
  );
};

export default Signup;
