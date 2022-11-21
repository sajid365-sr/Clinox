import { Spinner } from "flowbite-react";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext/AuthContext";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="text-center my-36">
        <Spinner
          aria-label="Extra large spinner example"
          size="xl"
          color="purple"
        />
      </div>
    );
  }
  if (user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoutes;
