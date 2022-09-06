import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../components/layout/layout.index";
import useCommonHelper from "../helpers/common.helper";

export const ProtectedRoute = ({ redirectPath = "/dashboard", path }) => {
  const {
    state: {
      session: { token },
    },
  } = useCommonHelper();
  if (token && path === "/") {
    //Esta en Auth
    return <Navigate to={"/dashboard"} replace />;
  }

  if (!token && path === "/dashboard") {
    //esta en auth
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};
