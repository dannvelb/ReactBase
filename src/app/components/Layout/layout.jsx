import "../components.scss";
import  SideBarCustom  from "./sidebar";

const AuthLayout = (props) => (
  <div className="d-flex position-absolute bg-primary w-100 h-100 justify-content-center align-items-center">
    {props.isAuth ? (
      <SideBarCustom>
        <div className="p-0 mt-0">{props.children}</div>
      </SideBarCustom>
    ) : (
      props.children
    )}
  </div>
);

export default AuthLayout;
