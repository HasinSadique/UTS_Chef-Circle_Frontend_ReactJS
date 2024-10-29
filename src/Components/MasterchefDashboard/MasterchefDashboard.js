import React from "react";
import { Outlet, useLocation } from "react-router-dom";

const MasterchefDashboard = () => {
  const location = useLocation();
  return (
    <div className=" bg-slate-800 shadow-2xl lg:w-3/4 md:w-4/5 sm:w-3/4 w-11/12 mx-auto my-10 lg:p-20 md:p-16 sm:p-10 px-5">
      <div className=" ">
        <h1 className="text-2xl font-serif border-b py-5">
          Masterchef Actions Center{" "}
        </h1>{" "}
        <div className=" mt-5 gap-3">
          <div className="grid gap-3 grid-cols-2">
            <a
              href="/masterchef-dashboard/unverified-recipes"
              name="radio-1"
              // type="radio"
              // aria-label="Show unverified recipes"
              class={`btn hover:bg-orange-600 ${
                location.pathname == "/masterchef-dashboard/unverified-recipes"
                  ? "bg-orange-600 text-white"
                  : ""
              }`}
            >
              {" "}
              Show unverified recipes{" "}
            </a>{" "}
            <a
              href="/masterchef-dashboard/allusers"
              name="radio-1"
              // type="radio"
              // aria-label="Show all users"
              class={`btn hover:bg-orange-600 ${
                location.pathname == "/masterchef-dashboard/allusers"
                  ? "bg-orange-600 text-white"
                  : ""
              }`}
            >
              Show All Chefs{" "}
            </a>{" "}
          </div>{" "}
          <div className=" mt-5 border-t w-full">
            <Outlet> </Outlet>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default MasterchefDashboard;
