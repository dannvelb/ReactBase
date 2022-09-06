import React, { FunctionComponent } from "react";
import { AuthFormClient } from "./auth.login-client";
import { useStateHelper } from "../../helpers/helpers.index";

export const AuthenticationPageClass: FunctionComponent = (props) => {
  const {
    state: {
    },
  } = useStateHelper();
  return (
    <div className="d-flex w-100 h-100 justify-content-center align-items-center auth-componente-class">
      <div className="content-login text-center">
        <AuthFormClient />
      </div>
    </div>
  );
};

export default AuthenticationPageClass;
