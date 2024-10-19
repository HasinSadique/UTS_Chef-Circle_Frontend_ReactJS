import React from "react";

const Navbar = () => {
  //   const [userDetails] = useContext(CurrentUserContext);
  //   const userData = userDetails;
  return (
    <div className="sticky top-0 z-50 text-white">
      <div class="navbar bg-slate-900">
        <div class="flex-1">
          <a style={{ color: "#e28041" }} class="btn btn-ghost text-2xl ">
            {" "}
            ChefCirle{" "}
          </a>{" "}
        </div>{" "}
        {/* If user logged in show the div 
            else Show Login Button
        */}
        <div class="">
          <div class="dropdown dropdown-end">
            <div tabindex="0" role="button" class="flex btn btn-ghost ">
              {/* <div class="flex w-10 rounded-full"> */}
              <svg
                fill="orange"
                className="rounded-full w-8 border-2 border-orange-600 p-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
              {/* <img
                className="rounded-full w-10 "
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              /> */}
              {/* </div>{" "} */}
              Account
            </div>{" "}
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
            {/* <ul
              tabindex="0"
              class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="" class="justify-between">
                  Profile
                </a>{" "}
              </li>{" "}
              <li>
                {" "}
                <a> Logout </a>
              </li>
            </ul> */}
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Navbar;
