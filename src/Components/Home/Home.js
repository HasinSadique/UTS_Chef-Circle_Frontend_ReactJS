import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";

const Home = () => {
  const [recipes, seRecipes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetch("http://localhost:5076/getallrecipes")
      .then((res) => res.json())
      .then((data) => seRecipes(data));
  }, []);

  return (
    <div class=" bg-slate-800 shadow-2xl lg:w-1/2 md:w-3/5 sm:w-3/4 mx-auto my-10">
      {/* Search bar*/}
      {/* <button
        class="btn btn-circle w-20 absolute right-0 "
        onclick="my_modal_2.showModal()"
      >
        open modal
      </button> */}
      {/* <div className="w-1/2 mx-auto mt-5">
        <label class="input input-bordered flex items-center gap-2">
          <input type="text" class="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70"
          >
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </label>
      </div> */}
      {/* This is add new receipe modal */}
      <div className="flex gap-3 justify-center items-center w-full p-5 bg-slate-900">
        <img
          className="w-10 h-10 rounded-full"
          alt="Tailwind CSS Navbar component"
          src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
        />
        <input
          onClick={openModal}
          // type="text"
          placeholder="What's cookin?"
          class="input input-bordered w-full "
        />
        {/* <button className="btn">Open Modal</button> */}
      </div>
      {isModalOpen && ( // Conditionally render the modal
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Create a recipe post</h3>
            <div className=" mt-2 mb-5 border border-slate-700"></div>
            <div className="">
              <div class="label">
                <span class="label-text">Upload image</span>
              </div>
              <input
                type="file"
                accept=".jpg, .png, .bmp, .gif, .tif, .webp, .heic"
                // onBlur={handleFileUploadBlur}
                // onChange={handleFileChange}
                className="input py-1.5 input-bordered w-full"
              />
              <div class="label">
                <span class="label-text">Title</span>
              </div>
              <input
                type="text"
                placeholder="What's the recipe name?"
                class="input input-bordered w-full mb-3"
              />
              <div class="label">
                <span class="label-text">Description</span>
              </div>

              <textarea
                class="textarea textarea-bordered w-full mb-3"
                placeholder="Tell us how did you make this recipe..."
              ></textarea>
              <div className="flex gap-3 justify-center items-center">
                <button className="btn w-28 bg-orange-400 font-bold text-black hover:bg-orange-600">
                  Post
                </button>
                <button
                  onClick={closeModal}
                  className="btn w-28 bg-orange-400 font-bold text-black hover:bg-orange-600"
                >
                  Cancel
                </button>
              </div>
            </div>
            {/* <div className="modal-action">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
            </div> */}
          </div>
        </div>
      )}
      <div class="card-body grid grid-cols-1">
        {recipes.map((recipe, index) => (
          <PostCard key={recipe.RID} props={recipe}></PostCard>
        ))}
      </div>{" "}
    </div>
  );
};

export default Home;
