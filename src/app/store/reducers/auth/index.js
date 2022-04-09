import { type as loginType } from '../../actionTypes/auth/loginUser';
import { type as AuthSuccessType } from '../../actionTypes/auth/success';
import { type as AuthErrorType } from '../../actionTypes/auth/error';

import loginHandler from './loginHandler';
import AuthErrorHandler from './errorHandler';

import AuthSuccessHandler  from './successHandler';



export const initialState = {
    errorLogin: "",
    loadingLogin: false,
};

const typeToHandler = {
    [loginType]: loginHandler,
    [AuthSuccessType]: AuthSuccessHandler,
    [AuthErrorType]: AuthErrorHandler
};

export const reducer = (state = initialState, action) => {
    const handler = typeToHandler[action.type];
    return handler ? handler(state, action, initialState) : state;
}

