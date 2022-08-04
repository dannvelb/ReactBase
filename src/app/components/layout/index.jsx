import { useState } from "react";
import "../components.scss";
import HeaderComponent from "./header.component";
import SideBarComponent from "./sidebar.component";

const AuthLayout = ({ isAuth, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="page-layout-component bg-primary w-100 h-100 d-flex flex-wrap justify-content-center align-items-center">
      {isAuth ? (
        <div className="contain-layout h-100 w-100">
          <div className="h-100 w-100 ">
            <HeaderComponent toogleSidebar={toggleMenu}></HeaderComponent>
            <div className="d-flex content-root  ">
              <div
                className={
                  "sidebar-content  " + (isOpen ? "show" : "notshow")
                }
              >
                <SideBarComponent></SideBarComponent>
              </div>
              <div className="page-content bg-secondary">{children}</div>
            </div>
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default AuthLayout;
