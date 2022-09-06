import { all, fork } from "redux-saga/effects";
import { authLoginSaga } from "./auth/sagas/login.auth";

export default function* rootSaga() {
  yield all([fork(authLoginSaga)]);
}
