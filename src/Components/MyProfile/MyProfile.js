import React, { useContext, useState } from "react";
import PostCard from "../PostCard/PostCard";
import { CurrentUserContext } from "../../App";

const MyProfile = () => {
  const [userDetails, setUserDetails] = useContext(CurrentUserContext);

  const [isUpdateDetailsModalOpen, setIsUpdateDetailsModalOpen] =
    useState(false);
  const [isUpdatePasswordModalOpen, setIsUpdatePasswordModalOpen] =
    useState(false);

  const openUpdateDetailsModal = () => setIsUpdateDetailsModalOpen(true);
  const closeUpdateDetailsModal = () => setIsUpdateDetailsModalOpen(false);

  const openUpdatePasswordModal = () => setIsUpdatePasswordModalOpen(true);
  const closeUpdatePasswordsModal = () => setIsUpdatePasswordModalOpen(false);

  return (
    <div className="lg:w-3/4 bg-slate-800 mx-auto px-10 pb-10 my-10">
      <div className="">
        <div className="lg:flex gap-3 border-b lg:px-20 pt-20 pb-5">
          <img
            className="lg:w-32 w-48 rounded-full mx-auto"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
          <div className="lg:flex justify-between items-center w-full ">
            <div className=" my-5">
              <h2 class=" card-title text-white lg:text-3xl md:text-wxl sm:text-xl text-lg block">
                {" "}
                Hasin Sadique{" "}
              </h2>{" "}
              <span className="block lg:text-left text-center">CHEF</span>
              <span className="flex gap-2 mt-2 lg:justify-start justify-center">
                <svg
                  className="w-5"
                  fill="orange"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
                3.5
              </span>
            </div>
            <div className="grid">
              <button
                onClick={openUpdateDetailsModal}
                className="btn bg-orange-400 hover:bg-orange-600 text-black font-bold my-auto"
              >
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z" />
                </svg>
                Edit user info
              </button>
              <button
                onClick={openUpdatePasswordModal}
                className="btn bg-orange-400 hover:bg-orange-600 text-black font-bold my-auto mt-2"
              >
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                  <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
                </svg>
                Change password
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5 grid lg:grid-cols-2 grid-cols-1 gap-5 border-b pb-5">
          {/* User address and phone number */}
          <div className="bg-slate-700 rounded-3xl p-10">
            <h1 className=" font-extrabold">Address</h1>
            <div className="flex gap-3 justify-center items-center mt-5 ">
              <svg
                fill="orange"
                className="w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <h3 className="">8 Marlborough Road, Homebush West, NSW 2140</h3>
            </div>
          </div>
          <div className="bg-slate-700 rounded-3xl p-10">
            <h1 className="text-left font-extrabold">Contact information</h1>
            <div className="flex gap-3 justify-left items-center mt-5">
              <svg
                fill="orange"
                className="w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
              </svg>
              <span>hasinsadique7@gmail.com</span>
            </div>
            <div className="flex gap-3 mt-5">
              <svg
                fill="orange"
                className="w-7"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                {/* <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                <path d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z" />
              </svg>
              <span>0426952618</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-xl font-serif font-bold">
        <h1 className="lg:text-center text-left">My Recipes</h1>
        <div className="mt-5 grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </div>
      </div>

      {/* User info update modal */}
      {isUpdateDetailsModalOpen && ( // Conditionally render the modal
        <div className="modal modal-open">
          <div className="modal-box bg-slate-900">
            <h3 className="text-lg font-bold">Update details</h3>
            <div className=" mt-2 mb-5 border border-slate-700"></div>
            <div className="">
              <div class="label">
                <span class="label-text text-white">
                  Upload profile picture
                </span>
              </div>
              <input
                type="file"
                accept=".jpg, .png, .bmp, .gif, .tif, .webp, .heic"
                // onBlur={handleFileUploadBlur}
                // onChange={handleFileChange}
                className="input py-1.5 input-bordered w-full mb-3"
              />
              <div class="label">
                <span class="label-text text-white">Address</span>
              </div>
              <input
                type="text"
                placeholder="Address"
                class="input input-bordered w-full mb-3"
              />
              <div class="label">
                <span class="label-text text-white">Address</span>
              </div>
              <input
                type="text"
                placeholder="Phone number"
                class="input input-bordered w-full mb-3"
              />

              <div className="flex gap-3 justify-center items-center">
                <button className="btn w-28 bg-orange-400 font-bold text-black hover:bg-orange-600">
                  Update
                </button>
                <button
                  onClick={closeUpdateDetailsModal}
                  className="btn w-28 bg-orange-400 font-bold text-black hover:bg-orange-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Update Password Modal */}
      {isUpdatePasswordModalOpen && ( // Conditionally render the modal
        <div className="modal modal-open">
          <div className="modal-box bg-slate-900">
            <h3 className="text-lg font-bold">Chnage Password</h3>
            <div className=" mt-2 mb-5 border border-slate-700"></div>
            <div className="">
              <div class="label">
                <span class="label-text text-white">Email</span>
              </div>
              <input
                type="text"
                placeholder="Type email address"
                class="input input-bordered w-full mb-3"
              />
              <div class="label">
                <span class="label-text text-white">Password</span>
              </div>
              <input
                type="text"
                placeholder="Password"
                class="input input-bordered w-full mb-3"
              />
              <div class="label">
                <span class="label-text text-white">Re-type assword</span>
              </div>
              <input
                type="text"
                placeholder="Re-type Password"
                class="input input-bordered w-full mb-3"
              />

              <div className="flex gap-3 justify-center items-center mt-5">
                <button className="btn w-28 bg-orange-400 font-bold text-black hover:bg-orange-600">
                  Change
                </button>
                <button
                  onClick={closeUpdatePasswordsModal}
                  className="btn w-28 bg-orange-400 font-bold text-black hover:bg-orange-600"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
