import { SessionInitialClass } from "../../../models/data/data.session";
import { TStoreAction } from "../../../models/data/data.store";

const closeUserHandler = (
  state: SessionInitialClass,
  action: TStoreAction,
  initialState: SessionInitialClass
): SessionInitialClass => {
  localStorage.removeItem("token");
  return {
    ...state,
    code: "",
    token: undefined,
  };
};
export default closeUserHandler;
