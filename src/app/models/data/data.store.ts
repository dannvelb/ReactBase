
import { SessionInitialClass } from "./data.session";
import { StateUIClass } from "./data.ui";

export interface IStateRedux {
  session: SessionInitialClass;
  UI: StateUIClass;
}

export type TStoreAction = {
  type: string;
  payload: any;
};


