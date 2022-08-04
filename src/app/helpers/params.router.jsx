import React, { Children, Suspense } from "react";
import { useTranslation } from "react-i18next";

import { Routes, Route, useParams, useNavigate } from "react-router-dom";



export const withParams = (Component) => (props) =>
  <Component {...props} params={useParams()} navigate={useNavigate()} />;
