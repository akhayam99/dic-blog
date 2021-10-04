import { createReducer, on } from '@ngrx/store';
import { Login, LoginFailed, LoginSuccess, Logout, LogoutFailed, LogoutSuccess, UserDataLoadFailed, UserDataLoadSuccess } from '..';
import { IBlogStateAuth } from '../state/blog.state';

const initialState: IBlogStateAuth = {
  loginError: null,
  loginInfo: null,
  loginLoader: false,
  logoutLoader: false,
  userData: null,
}

export default createReducer(
  initialState,

  on(Login, (state) => ({
    ...state,
    loginLoader: true,
    loginError: null,
  })),
  on(LoginSuccess, (state, loginInfo) => ({
    ...state,
    loginLoader: false,
    loginInfo,
  })),
  on(LoginFailed, (state, loginError) => ({
    ...state,
    loginLoader: false,
    loginError,
  })),

  on(Logout, (state) => ({
    ...state,
    logoutLoader: true,
  })),
  on(LogoutSuccess, (state) => ({
    ...state,
    loginInfo: null,
    logoutLoader: false,
    userData: null,
  })),
  on(LogoutFailed, (state) => ({
    ...state,
    logoutLoader: false,
  })),

  on(UserDataLoadSuccess, (state, userData) => ({
    ...state,
    userData,
  })),
  on(UserDataLoadFailed, (state) => ({
    ...state,
    userData: null,
  })),
)

