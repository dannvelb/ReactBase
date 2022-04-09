import {all, fork} from 'redux-saga/effects';

import loginUserSaga from './auth/loginUserSaga';

export default function* rootSagas() {
  yield all([
    fork(loginUserSaga),
  ]);
}
