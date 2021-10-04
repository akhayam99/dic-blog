import { createReducer, on } from '@ngrx/store';
import { Login, LoginFailed, LoginSuccess, LogoutSuccess, UserDataLoadFailed, UserDataLoadSuccess } from '..';
import { IBlogStateAuth } from '../state/blog.state';

const initialState: IBlogStateAuth = {
  logging: false,
  loginError: null,
  loginInfo: null,
  userData: null,
}

export default createReducer(
  initialState,

  on(Login, (state) => ({
    ...state,
    logging: true,
    loginError: null,
  })),
  on(LoginSuccess, (state, loginInfo) => ({
    ...state,
    logging: false,
    loginInfo,
  })),
  on(LoginFailed, (state, loginError) => ({
    ...state,
    logging: false,
    loginError,
  })),

  on(UserDataLoadSuccess, (state, userData) => ({
    ...state,
    userData,
  })),
  on(UserDataLoadFailed, (state) => ({
    ...state,
    userData: null,
  })),

  on(LogoutSuccess, (state) => ({
    ...state,
    loginInfo: null,
    userData: null,
  })),
)

