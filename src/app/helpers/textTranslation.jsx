import React, { Suspense } from "react";
import { useTranslation } from "react-i18next";

export const TextTranslation = ({name}) => {
  const { t, i18n } = useTranslation("common");
  return `${t(name)}`;
};
