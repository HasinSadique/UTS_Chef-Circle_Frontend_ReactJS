import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { CurrentUserContext } from "../../App";

const RequireMasterchefAuth = ({ children }) => {
  const [currentUserDetails] = useContext(CurrentUserContext);
  const currentUserData = currentUserDetails;
  const location = useLocation();
  if (currentUserData?.Role != "Masterchef") {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default RequireMasterchefAuth;
