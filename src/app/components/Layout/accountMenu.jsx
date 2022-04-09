import { useState } from "react";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { action as closeSessionAction } from "../../store/actionTypes/session/closeSession";
import { useDispatch } from "react-redux";

export default () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const closeSession = () => {
    dispatch(closeSessionAction());
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Mi cuenta
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
        <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
        <MenuItem onClick={handleClose}>Configuración</MenuItem>
        <MenuItem onClick={closeSession} >Cerrar sesión</MenuItem>
      </Menu>
    </div>
  );
};
