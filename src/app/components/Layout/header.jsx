import { useSelector } from "react-redux";
import AccountMenu from "./accountMenu";

export default ({ toogleMenu }) => {
//const cliente = useSelector(state=>())
  return (
    <div className=" w-100" style={{ height: 75, top: 0 }}>
      <div
        className="w-100 bg-primary  d-flex justify-content-between align-items-center py-2 px-3"
        style={{ maxHeight: 40, zIndex: 99 }}
      >
        <div className="h5 text-light " style={{ fontWeight: "400" }}>
        </div>
        <AccountMenu />
      </div>
      <div
        className="w-100 bg-primary  justify-content-between align-items-center py-2 px-3"
        style={{ maxHeight: 40, zIndex: 99999 }}
      >
        <button onClick={toogleMenu} id="menu-hamburguesa" className="btn-menu">
          <span className="menu-list" />
        </button>
      </div>
    </div>
  );
};
