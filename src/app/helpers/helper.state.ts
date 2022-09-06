import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { IStateRedux } from "../models/data/data.store";
export const useStateHelper = () => {
  const state: IStateRedux = useSelector(
    (state: IStateRedux): IStateRedux => state
  );
  const dispatch = useDispatch();

  return {
    state,
    dispatch,
  };
};

export default useStateHelper;
