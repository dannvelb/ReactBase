import React, { Component, FunctionComponent } from "react";
import Button from "@mui/material/Button";
import { BoolConst, StringConst } from "../const/const";
import { CircularProgress } from "@mui/material";

type TButtonComponent = {
  onClick: any;
  label?: string;
  isLoading?: boolean;
  children?: any;
  disabled?: boolean;
  variant?: 'text' | 'contained' | 'outlined'
};

export const ButtonComponent: FunctionComponent<TButtonComponent> = ({
  onClick,
  label,
  isLoading,
  children,
  disabled,
  variant = "text",
}) => {
  return (
    <Button
      className="w-100 h-auto"
      onClick={onClick}
      variant={variant}
      disabled={isLoading || disabled}
    >
      {isLoading ? (
        <CircularProgress />
      ) : (
        <>
          {label}
          {children}
        </>
      )}
    </Button>
  );
};
ButtonComponent.defaultProps = {
  label: StringConst.empty,
  isLoading: BoolConst.false,
};

export default ButtonComponent;
