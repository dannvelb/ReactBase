import { Button, Menu, MenuItem } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import { CallBackConst } from "../const/const";

type TOptionDropdown = {
  label: string;
  action: typeof CallBackConst.empty;
};

type TMenuDropDownComponent = {
  title: string;
  options: Array<TOptionDropdown>;
};

export const MenuDropdownComponent: FunctionComponent<
  TMenuDropDownComponent
> = ({ title, options }) => {
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
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {title}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map((option, key) => (
          <MenuItem key={key} onClick={option.action}>{option.label}</MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default MenuDropdownComponent;
