import {} from "react";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

// for protecting the checkout route
const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth(); // form authContext

  if (loading) {
    return <div>Loading...</div>;
  }

  if (currentUser) {
    return children;
  }

  // naviagate a react-router-dom property that can navigate the user back to any page but here login
  return <Navigate to="/login" replace />;
};

// proptype typescript to define props more propery we can disable but we can just use it for better code reading
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
