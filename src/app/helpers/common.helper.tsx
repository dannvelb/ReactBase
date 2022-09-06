import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-cool-inview";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IStateRedux } from "../models/data/store.model";
import { useSnackbar, VariantType } from "notistack";
import { Location, useLocation, useNavigate, useRoutes } from "react-router";
import { HTTPErrorResponse } from "../models/http/common.http";

export type TLanguages = "en" | "es";
export const useCommonHelper = () => {
  const { enqueueSnackbar } = useSnackbar();
  const state: IStateRedux = useSelector(
    (state: IStateRedux): IStateRedux => state
  );
  const [loadingCommon, setLoadingCommon] = useState(false);

  const errResolve = (err: HTTPErrorResponse) => {
    setLoadingCommon(false);
    showAlert(err.message, "error");
  };
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("common");
  const translate = (key: string) => t(key);
  const changeLanguage = (key: TLanguages) => i18n.changeLanguage(key);
  const dispatch = useDispatch();
  const showAlert = (message: string, variant: VariantType = "default") =>
    enqueueSnackbar(message, { variant });
  return {
    state,
    translate,
    changeLanguage,
    dispatch,
    showAlert,
    navigate,
    errResolve,
    setLoadingCommon,
    loadingCommon,
  };
};

export default useCommonHelper;
