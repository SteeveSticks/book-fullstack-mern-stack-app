import {} from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/admin" />;
  }

  return children ? children : <Outlet />; //if not children = to the children of the parent route
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
