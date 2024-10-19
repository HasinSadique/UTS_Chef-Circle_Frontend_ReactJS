import React from "react";
import PostCard from "../PostCard/PostCard";

const Home = () => {
  return (
    <div class="card bg-base-200 shadow-2xl lg:w-1/2 md:w-3/5 sm:w-3/4 mx-auto my-5 ">
      {/* Search bar*/}
      <div className="w-1/2 mx-auto mt-5">
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
      </div>
      <div class="card-body grid grid-cols-1">
        {" "}
        <PostCard> </PostCard> <PostCard> </PostCard> <PostCard> </PostCard>{" "}
        <PostCard> </PostCard>{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
