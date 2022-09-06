import {
  StringConst,
} from "../../const/const";
import { TStoreAction } from "./data.store";

export class SessionInitialClass {
  code: string;
  token?: string;
  constructor() {
    this.code = StringConst.empty;
  }
}

export type TAuthSetUserAction = Omit<TStoreAction, "payload"> & {
  payload: SessionInitialClass;
};
