import React, { useEffect, useState } from "react";
import PostCard from "../PostCard/PostCard";

const Home = () => {
  const [recipes, seRecipes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  var photoURL = localStorage.getItem("currentPhotoURL");

  const handleTitleBlur = (event) => {
    setTitle(event.target.value);
  };
  const handleDescriptionBlur = (event) => {
    setDescription(event.target.value);
  };
  var Uid = localStorage.getItem("currentUID");

  useEffect(() => {
    fetch("https://localhost:7262/getallverifiedrecipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        seRecipes(data);
      });
  }, []);

  var handlePostRecipe = () => {
    // event.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UID: Uid,
        Title: title,
        Description: description,
        Likes: 0,
        IsVerified: false,
      }),
    };

    fetch("https://localhost:7262/addRecipe", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.rid > 0) {
          alert(data.message);
          window.location.reload(true);
        }
      });
  };
  var userID = parseInt(localStorage.getItem("currentUID"));
  // const [userID, setUserID] = useState(parseInt(localstorage.getitem("currentUID")));

  return (
    <div className=" bg-slate-800 shadow-2xl lg:w-3/4 md:w-3/5 sm:w-3/4 mx-auto my-10">
      {" "}
      <div
        className={`flex gap-3 justify-center items-center w-full p-5 bg-slate-900 ${
          userID ? "" : "hidden"
        }`}
      >
        <img
          className="w-10 h-10 rounded-full"
          alt="Tailwind CSS Navbar component"
          src={
            photoURL
              ? photoURL
              : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          }
        />
        <input
          onClick={openModal}
          // type="text"
          placeholder="What's cookin?"
          className="input input-bordered w-full bg-white "
        />{" "}
        {/* <button className="btn">Open Modal</button> */}{" "}
      </div>{" "}
      {isModalOpen && ( // Conditionally render the modal
        <div className="modal modal-open">
          <div className="modal-box bg-slate-800">
            <h3 className="text-lg font-bold text-white">
              {" "}
              Create a recipe post{" "}
            </h3>{" "}
            <div className=" mt-2 mb-5 border border-slate-700"> </div>{" "}
            <div className="">
              {" "}
              {/* <div className="label">
                <span className="label-text"> Upload image </span>{" "}
                </div>{" "}
                <input
                type="file"
                accept=".jpg, .png, .bmp, .gif, .tif, .webp, .heic"
                // onBlur={handleFileUploadBlur}
                // onChange={handleFileChange}
                className="input py-1.5 input-bordered w-full"
                /> */}{" "}
              <div className="label">
                <span className="label-text text-white"> Title </span>{" "}
              </div>{" "}
              <input
                onBlur={handleTitleBlur}
                type="text"
                placeholder="What's the recipe name?"
                className="input input-bordered w-full mb-3 text-black bg-white"
              />
              <div className="label">
                <span className="label-text text-white"> Description </span>{" "}
              </div>{" "}
              <textarea
                onBlur={handleDescriptionBlur}
                className="textarea textarea-bordered w-full mb-3 text-black bg-white"
                placeholder="Tell us how did you make this recipe..."
              ></textarea>{" "}
              <div className="flex gap-3 justify-center items-center">
                <button
                  onClick={() => {
                    handlePostRecipe();
                  }}
                  className="btn w-28 bg-orange-400 font-bold text-black hover:bg-orange-600"
                >
                  Post{" "}
                </button>{" "}
                <button
                  onClick={closeModal}
                  className="btn w-28 bg-orange-400 font-bold text-black hover:bg-orange-600"
                >
                  Cancel{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
            {/* <div className="modal-action">
                                                                                                                                      <button className="btn" onClick={closeModal}>
                                                                                                                                        Close
                                                                                                                                      </button>
                                                                                                                                    </div> */}{" "}
          </div>{" "}
        </div>
      )}{" "}
      <div className="card-body grid grid-cols-1">
        {" "}
        {!recipes ? (
          <h1>No recipes posted yet.</h1>
        ) : (
          recipes.map((recipe, index) => (
            <PostCard key={recipe.RID} props={recipe}>
              {" "}
            </PostCard>
          ))
        )}{" "}
      </div>{" "}
    </div>
  );
};

export default Home;
