import { takeLatest, put, call, all, ForkEffect } from "redux-saga/effects";
import { localStorageKeys } from "../../../const/const";

import { HTTPErrorResponse } from "../../../models/http/common.http";

import { Endpoints } from "../../endpoints";
import { TAuthLoginResponse } from "../../../models/http/auth.http";
import { sessionSetUserAction } from "../../session/actionTypes/setUser.session";
import { HttpProvider } from "../../../providers/http.providers";
import { TStoreAction } from "../../../models/data/data.store";
import { AUTH_LOGIN_TYPE } from "../actionTypes/login.auth";

function* authLoginAsync(data: TStoreAction): any {
  try {
    const response: TAuthLoginResponse = yield call(
      HttpProvider.post,
      `${Endpoints.auth.base}`,
      data.payload
    );
    yield put(
      sessionSetUserAction({
        code: response.code,
        token: response.token,
      })
    );
    localStorage.setItem("token", response.token);
  } catch (err) {
    const error: HTTPErrorResponse = err;
  }
}

export function* authLoginSaga() {
  yield takeLatest(AUTH_LOGIN_TYPE, authLoginAsync);
}
