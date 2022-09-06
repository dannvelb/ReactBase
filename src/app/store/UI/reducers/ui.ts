import { TStoreAction } from "../../../models/data/data.store";
import { StateUIClass } from "../../../models/data/data.ui";

const initialState: StateUIClass = new StateUIClass();

export const UIReducer = (state = initialState, action: TStoreAction) => {
  const handlers: { [key: string]: CallableFunction } = {};
  const handler: CallableFunction = handlers[action.type];
  return handler ? handler(state, action, initialState) : state;
};
