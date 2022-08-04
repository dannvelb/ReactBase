import React, { Children, Suspense } from "react";
import { useTranslation } from "react-i18next";

import { Routes, Route, useParams } from "react-router-dom";

export const InjectProviders = (Component, providers) => (props) =>
  <Component {...props} {...providers}  />;
