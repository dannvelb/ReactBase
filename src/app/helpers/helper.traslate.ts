import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const useTranslateHelper = () => {
  const { t, i18n } = useTranslation("common");
  const translate = (key) => t(key);

  return {
    translate,
  };
};

export default useTranslateHelper;
