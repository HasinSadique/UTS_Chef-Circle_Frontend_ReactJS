import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import PostCard from "../PostCard/PostCard";

const MasterchefHome = () => {
  const [recipes, seRecipes] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7262/getallrecipes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        seRecipes(data);
      });
  }, []);

  return (
    <div className="mt-10 grid gap-3 grid-cols-1 bg-slate-800 shadow-2xl lg:w-5/6 mx-auto">
      {" "}
      {recipes
        .filter((recipe) => recipe.IsVerified == false)
        .map((rec, index) => (
          <PostCard key={rec.RID} props={rec}>
            {" "}
          </PostCard>
        ))}{" "}
    </div>
  );
};

export default MasterchefHome;
