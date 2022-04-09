import { connect } from "react-redux";
import "../components.scss";
import {  useState } from "react";
import { Link } from "react-router-dom";
import {
  sudomenu,
  adminmenu,
  profesormenu,
  estudiantemenu,
} from "../../models/menu.model";
import HeaderComponent from './header';


const menu = {
  Sudo: sudomenu,
  Profesor: profesormenu,
  Estudiante: estudiantemenu,
  Administrador: adminmenu,
};


const SideBar = ({  rol, customer,  children }) => {
  const [submenus, setSubmenus] = useState({});
  const openMenu = (item) => {
    setSubmenus({ [item]: !submenus[item] == true });
  };
  const [openMenut, setOpenMenu] = useState(false);
  const toogleMenu = (value) => setOpenMenu(!openMenut)
  const getMenu = () =>
    menu[getRolName(rol)]?.map((item, index) => (
      <div key={index}>
        {item?.submenus?.length > 0 ? (
          <>
            <div className="accordion-item">
              <li
                className="accordion-header"
                onClick={() => openMenu(item.title)}
              >
                {item.title}
              </li>
              <div
                className={
                  "accordion-collapse" +
                  (submenus[item.title] ? " " : " collapse")
                }
              >
                <ul>
                  {item.submenus.map((submenu, index) => (
                    <li key={index} className="submenu">
                      <a>{submenu.title}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            {item.linkeable ? (
              <Link to={item.path}>
                <li className="item-menu">
                  <span>{item.title}</span>
                </li>
              </Link>
            ) : (
              <li className="item-menu not">
                <span>{item.title}</span>
              </li>
            )}
          </>
        )}
      </div>
    ));
  return (
    <>
      <div className={"w-100 h-100 position-absolute bg-light d-flex  layout "}>
        <div className="h-100 w-100">
          <HeaderComponent toogleMenu={toogleMenu}/>

          <div className="d-flex content-root position-fixed w-100">
            <div className={"sidebar  " + (openMenut ? "show" : " notshow") }>
              <div className=" py-3 menu-content">
                <div className="accordion accordion-flush">{getMenu()}</div>
              </div>
            </div>
            <div className="page-content">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

const getRolName = (rol) => {
  switch (rol) {
    case 1:
      return "Sudo";
    case 4:
      return "Administrador";
    case 3:
      return "Profesor";
    case 4:
      return "Estudiante";
    default:
      return "Sudo";
  }
};

const mapStateToProps = (state) => ({
  user: state?.session?.user,
  customer: state?.session?.customer,
  rol: state?.session?.USER_TYPE,
});






export default connect(mapStateToProps, {})(SideBar);
