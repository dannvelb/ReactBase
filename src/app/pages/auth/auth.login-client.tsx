import { CircularProgress } from "@mui/material";
import React, { FunctionComponent, useState } from "react";
import InputComponentCommon from "../../components/input.component";
import { textsTranslates } from "../../const/text.const";
import useStateHelper from "../../helpers/helper.state";
import useTranslateHelper from "../../helpers/helper.traslate";
import { authLoginAction } from "../../store/auth/actionTypes/login.auth";
export const AuthFormClient: FunctionComponent = () => {
  const {
    state: {
     
    },
    dispatch,
  } = useStateHelper();
  const { translate} = useTranslateHelper()
  
  const [code, setCode] = useState("");
  const searchCode = () => {
    if (code) {
      dispatch(authLoginAction({
        username: code,
        password:'21873'
      }));
    }
  };
  return (
    <div className="">
      <div className=" h4">
        {translate('welcomeText')}
      </div>
      <div>
        {false ? (
          <CircularProgress />
        ) : (
          <InputComponentCommon
            label={translate('sessionCode')}
            name="client"
            type="text"
            onEnter={searchCode}
            onChange={setCode}
            value={code}
            error={''}
          />
        )}
      </div>
    </div>
  );
};
