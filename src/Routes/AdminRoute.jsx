import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import { AuthContext } from "../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
