import React, { useEffect, useState } from "react";

const AllUsers = () => {
  // const [userRating, setUserRating] = useState(0);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5076/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  var handlePromoteBtn = (id) => {
    console.log("UID:", id);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        UID: id,
      }),
    };

    fetch("http://localhost:5076/promoteuser", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success == true && data.status == 200) {
          // setLike(data.result.updatedLikes);
          window.location.reload(true);
        }
      });
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <div class="overflow-x-auto">
          <table class="table mt-20 ">
            {" "}
            {/* <!-- head --> */}{" "}
            <thead className="text-white text-xl">
              <tr>
                <th className="text-left"> User ID </th>{" "}
                <th className="text-left"> Name </th>{" "}
                <th className="text-center"> Action </th>{" "}
              </tr>{" "}
            </thead>{" "}
            <tbody>
              {" "}
              {/* <!-- row 1 --> */}{" "}
              {users
                .filter((user) => user.Role == "Chef")
                .map((rec, index) => (
                  <tr>
                    <td>
                      <div class="flex items-center gap-3">
                        <div>
                          <div class="font-bold"> {rec.UID} </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </td>{" "}
                    <td>
                      <div class="flex items-center gap-3">
                        <div>
                          <div class="font-bold"> {rec.Fullname} </div>{" "}
                          <div class="text-sm opacity-50"> {rec.Role} </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </td>{" "}
                    <th className="text-center">
                      <button
                        onClick={() => {
                          handlePromoteBtn(rec.UID);
                        }}
                        class="btn btn-warning"
                      >
                        {" "}
                        Promote to Masterchef{" "}
                      </button>{" "}
                    </th>{" "}
                  </tr>
                ))}
            </tbody>{" "}
            {/* <!-- foot --> */}{" "}
          </table>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default AllUsers;
