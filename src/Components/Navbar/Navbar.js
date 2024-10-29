import React, { useContext } from "react";
import LOGO from "../../Assets/Chef_Circle-removebg-preview.png";
import { useLocation, useNavigate } from "react-router-dom";
import { CurrentUserContext } from "../../App";

const Navbar = () => {
  //   const [userDetails] = useContext(CurrentUserContext);
  //   const userData = userDetails;

  const [currentUserDetails, setCurrentUserDetails] =
    useContext(CurrentUserContext);

  var curentUID = localStorage.getItem("currentUID");
  var currentFullname = localStorage.getItem("currentFullname");
  var currentRole = localStorage.getItem("currentRole");
  var photoURL = localStorage.getItem("currentPhotoURL");

  // console.log("farshid ??????", localStorage.getItem("currentUID"));

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || `/signin`;

  const handleLogout = () => {
    setCurrentUserDetails(null);
    localStorage.clear();

    // window.location.reload(true);
  };
  // console.log(localStorage.getItem("currentUserDetails"));
  return (
    <div className="sticky top-0 z-50 text-white shadow-2xl">
      <div className="navbar bg-slate-900">
        <div className="flex-1">
          <a
            href="/"
            style={{ color: "#e28041" }}
            className="btn bg-slate-900 hover:bg-slate-900 border-0 text-2xl "
          >
            <img
              className="lg:w-32 md:w-28 sm:w-24 w-20 rounded-full bg-slate-900 shadow-2xl hover:scale-110 ease-in-out duration-500"
              src={LOGO}
            />{" "}
            {/* ChefCirle{" "} */}{" "}
          </a>{" "}
        </div>{" "}
        {/* If user logged in show the div 
        else Show Login Button
        */}{" "}
        <div className="">
          <div className="dropdown dropdown-end">
            <div tabIndex="0" role="button" className="flex btn btn-ghost ">
              {" "}
              {/* <div className="flex w-10 rounded-full"> */}{" "}
              {photoURL != null ? (
                <img
                  className="rounded-full w-10 "
                  // alt="Tailwind CSS Navbar component"
                  src={
                    photoURL
                      ? photoURL
                      : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  }
                  // src=
                />
              ) : (
                <svg
                  fill="orange"
                  className="rounded-full w-8 border-2 border-orange-600 p-1.5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}{" "}
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
              )}{" "}
              {/* </div>{" "} */}
              {currentFullname ? (
                <h1>{currentFullname}</h1>
              ) : (
                <h1>{"Account"}</h1>
              )}
            </div>{" "}
            <ul
              tabIndex="0"
              className="menu menu-sm dropdown-content bg-slate-900 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li className={`${curentUID == null ? "" : "hidden"}`}>
                <a href="/signin"> Login </a>{" "}
              </li>{" "}
              <li
                className={`${
                  curentUID == null || currentRole != "Masterchef"
                    ? "hidden"
                    : ""
                }`}
              >
                <a href="/masterchef-dashboard"> Masterchef Dashboard </a>{" "}
              </li>{" "}
              <li className={`${curentUID == null ? "hidden" : ""}`}>
                <a href="/myProfile"> My profile </a>{" "}
              </li>{" "}
              <li className={`${curentUID == null ? "hidden" : ""}`}>
                <a onClick={() => handleLogout()} href="/signin">
                  {" "}
                  Logout{" "}
                </a>{" "}
              </li>{" "}
            </ul>
            {/* <ul
                                                                                                                                                                                                  tabIndex="0"
                                                                                                                                                                                                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                                                                                                                                                                                                >
                                                                                                                                                                                                  <li>
                                                                                                                                                                                                    <a href="" className="justify-between">
                                                                                                                                                                                                      Profile
                                                                                                                                                                                                    </a>{" "}
                                                                                                                                                                                                  </li>{" "}
                                                                                                                                                                                                  <li>
                                                                                                                                                                                                    {" "}
                                                                                                                                                                                                    <a> Logout </a>
                                                                                                                                                                                                  </li>
                                                                                                                                                                                                </ul> */}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
