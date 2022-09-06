import React, { FunctionComponent } from "react";
import "../components.scss";
import { Breadcrumbs, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RouteInfoClass } from "../../const/routes.const";
import MenuDropdownComponent from "../dropdown.component";
import useCommonHelper, { TLanguages } from "../../helpers/common.helper";
import ButtonComponent from "../button.common";
import { sessionCloseUserAction } from "../../store/session/actionTypes/closeSession.session";

const HeaderComponent = ({}) => {
  const {
    state: {
      session: { token, code },
    },
    dispatch,
    translate,
    changeLanguage,
  } = useCommonHelper();
  const closeSessionUser = () => dispatch(sessionCloseUserAction());
  return (
    <div className="header-component d-flex flex-wrap bg-primary  w-100  justify-content-center align-items-center">
      <div className="containOne w-100 d-flex justify-content-between align-items-center py-2 ">
        <div className="d-flex align-items-center">
          <div className=" text-light px-2">{code}</div>
        </div>
        <div className="d-flex">
          <MenuDropdownComponent
            title={translate("language")}
            options={[
              {
                label: translate("English"),
                action: () => changeLanguage("en"),
              },
              {
                label: translate("Español"),
                action: () => changeLanguage("es"),
              },
            ]}
          ></MenuDropdownComponent>
          {token && (
            <ButtonComponent
              onClick={closeSessionUser}
              label={translate("closeSession")}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
