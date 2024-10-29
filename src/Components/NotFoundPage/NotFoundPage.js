import React from "react";

const NotFoundPage = () => {
  return (
    <div className="h-screen bg-white text-black">
      {" "}
      <div className=" border-black rounded-3xl lg:pt-32 pt-40">
        <svg
          fill="black"
          className="lg:w-40 w-32 mx-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
          <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
        <h1 className="lg:text-9xl text-8xl"> 404 </h1>{" "}
        <h1 className="lg:text-5xl text-3xl"> Page Not Found! </h1>{" "}
      </div>
    </div>
  );
};

export default NotFoundPage;
