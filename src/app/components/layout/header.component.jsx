import { useState } from "react";
import { SESSION_CLOSE_USER_ACTION } from "../../store/reducers/session.reducer";

import { connect } from "react-redux";
import "../components.scss";
import { Dropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
const HeaderComponent = ({ toogleSidebar, user, closeSessionUser, client }) => (
  <div className="header-component d-flex flex-wrap   w-100  justify-content-center align-items-center">
    <div className="containOne w-100 d-flex justify-content-between align-items-center py-2 px-3">
      <div className="text-light h5">{client.name}</div>
      <MenuDropdown
        title={`${user.name} ${user.last} | ${user.rol.name}`}
        closeSessionUser={closeSessionUser}
      ></MenuDropdown>
    </div>
    <div className="containTwo w-100  d-flex justify-content-between align-items-center py-0 px-3">
      <Button className="py-0 px-0" onClick={toogleSidebar}>Open</Button>
    </div>
  </div>
);

const MenuDropdown = ({ title, closeSessionUser }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Dropdown className="d-inline mx-2 secondary">
        <Dropdown.Toggle>{title}</Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={closeSessionUser}>
            Cerrar sesion
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default connect(
  (state) => ({ user: state.session.user, client: state.session.client }),
  {
    closeSessionUser: SESSION_CLOSE_USER_ACTION,
  }
)(HeaderComponent);
/*
<Button
id="basic-button"
aria-controls={open ? "basic-menu" : undefined}
aria-haspopup="true"
aria-expanded={open ? "true" : undefined}
onClick={handleClick}
>
{title}
</Button>
<Menu
id="basic-menu"
anchorEl={anchorEl}
open={open}
onClose={handleClose}
MenuListProps={{
  "aria-labelledby": "basic-button",
}}
>
<MenuItem onClick={closeSessionUser}>Logout</MenuItem>
</Menu>*/
