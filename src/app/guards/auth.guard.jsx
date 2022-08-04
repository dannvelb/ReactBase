import { Redirect } from "react-router-dom";
import { Route, Navigate, Outlet } from "react-router-dom";
import AuthLayout from "../components/layout";
import { RoutesPathConst } from "../const/routes";

export const ProtectedRoute = ({
  isAuth,
  redirectPath = "/dashboard",
  path
}) => {
  if (isAuth && path === "/auth") {//Esta en Auth
    return <Navigate to={'/dashboard'} replace />;
  }
  

  if (!isAuth && path === "/dashboard") {//esta en auth
    return <Navigate to={redirectPath} replace />;
  }
  return (
    <AuthLayout isAuth={path=='/dashboard'}>
      <Outlet />
    </AuthLayout>
  );
};
