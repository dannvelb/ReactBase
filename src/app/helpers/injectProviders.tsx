import React, { Children, Suspense } from "react";
import { connect, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Routes, Route, useParams } from "react-router-dom";

const InjectProviders =
  (Component, providers = {}) =>
  (props) => {
    const dispatch = useDispatch();
    const { t, i18n } = useTranslation("common");
    const translate = (key) => t(key);
   
    return (
      <Component
        {...props}
        {...providers}
        translate={translate}
      />
    );
  };
export default InjectProviders;
