import { takeLatest, put, call } from "redux-saga/effects";
import { httpGet, httpPost } from "../../consumer";
import Endpoints from "../../endpoints";
import { type as loginUser } from "../../actionTypes/auth/loginUser";
import { action as authError } from "../../actionTypes/auth/error";
import { action as authSuccess } from "../../actionTypes/auth/success";
import { action as setSession } from "../../actionTypes/session/setSession";
import { IS_USER_AUTH, USER_TYPE } from "../../reducers/session";
function* loginUserAsync(data) {
  try {

    /*const response = yield call(httpPost, `${Endpoints.auth.login}`, data.user);
    if (!response.success) throw response.message;
    yield put(
      setSession({
        token: response.data.token,
        user: response.data.user,
        [IS_USER_AUTH]:true,
        [USER_TYPE]:response.data.user.type
      })
    );*/
    yield put(
      setSession({
        token: 'temp',
        user: 'temp',
        [IS_USER_AUTH]:true,
        [USER_TYPE]:4
      })
    );
    yield put(authSuccess());
  } catch (error) {
    yield put(authError("errorLogin", error));
  }
}

export default function* loginUserSaga() {
  yield takeLatest(loginUser, loginUserAsync);
}
