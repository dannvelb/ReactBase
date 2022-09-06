import React, { useEffect, useRef, useState } from "react";
import { useSnackbar, VariantType } from "notistack";

const useAlertHelper = () => {
  const { enqueueSnackbar } = useSnackbar();
  const showAlert = (message: string, variant: VariantType = "default") =>
    enqueueSnackbar(message, { variant });
  return {
    showAlert,
  };
};

export default useAlertHelper;
