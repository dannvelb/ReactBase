import { Alert, Snackbar } from "@mui/material";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Location, useLocation } from "react-router";
import { localStorageKeys } from "../../const/const";
import { RouteInfoClass, Routes } from "../../const/routes.const";
import useCommonHelper from "../../helpers/common.helper";
import useStateHelper from "../../helpers/helper.state";
import { TCommonComponent } from "../../models/components/common.model";
import "../components.scss";
import HeaderComponent from "./layout.header";

const AuthLayoutComponent: FunctionComponent<TCommonComponent> = ({
  children,
}) => {
  
  return (
    <div className="page-layout-component  w-100 h-100 d-flex flex-wrap justify-content-center align-items-center">
      <div className="contain-layout bg.primary h-100 w-100">
        <div className="h-100 w-100 ">
          <div className="d-flex content-root  ">
            <div className="page-content bg-secondary">
              <HeaderComponent></HeaderComponent>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayoutComponent;
