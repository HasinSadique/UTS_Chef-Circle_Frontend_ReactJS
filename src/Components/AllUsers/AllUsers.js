import React, { useEffect, useState } from "react";

const AllUsers = () => {
  // const [userRating, setUserRating] = useState(0);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7262/")
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

    fetch("https://localhost:7262/promoteuser", requestOptions)
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
      <div className="overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="table mt-20 ">
            {" "}
            {/* <!-- head --> */}{" "}
            <thead className="text-white text-xl">
              <tr>
                {/* <th className="text-left"> User ID </th>{" "} */}
                <th className="text-left"> User Photo </th>{" "}
                <th className="text-left"> Full Name </th>{" "}
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
                    {/* <td>{rec.UID}</td> */}
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="flex justify-center">
                          {" "}
                          {/* <div className="font-bold"> {rec.UID} </div>{" "} */}{" "}
                          <img
                            className="rounded-full w-14"
                            src={
                              rec.PhotoURL
                                ? rec.PhotoURL
                                : "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            }
                            alt=""
                          />
                        </div>{" "}
                      </div>{" "}
                    </td>{" "}
                    <td>
                      <div className="flex items-center gap-3">
                        <div>
                          <div className="font-bold"> {rec.Fullname} </div>{" "}
                          <div className="text-sm opacity-50"> {rec.Role} </div>{" "}
                        </div>{" "}
                      </div>{" "}
                    </td>{" "}
                    <th className="text-center">
                      <button
                        onClick={() => {
                          handlePromoteBtn(rec.UID);
                        }}
                        className="btn btn-warning"
                      >
                        {" "}
                        Promote to Masterchef{" "}
                      </button>{" "}
                    </th>{" "}
                  </tr>
                ))}{" "}
            </tbody>{" "}
            {/* <!-- foot --> */}{" "}
          </table>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default AllUsers;
