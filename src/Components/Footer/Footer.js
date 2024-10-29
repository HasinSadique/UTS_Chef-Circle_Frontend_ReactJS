import React from "react";
import Logo from "../../Assets/Chef_Circle-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-slate-900 text-white p-10">
      <aside>
        <img className=" w-60" src={Logo} alt="" />
        <p className="font-bold"> ChefCircle Community </p>{" "}
        <p> Copyright© {new Date().getFullYear()} - All right reserved </p>{" "}
      </aside>{" "}
    </footer>
  );
};

export default Footer;
