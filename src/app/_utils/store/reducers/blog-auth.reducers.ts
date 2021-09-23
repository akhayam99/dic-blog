import { createReducer, on } from '@ngrx/store';
import * as fromActions from "../actions";
import { IBlogStateAuth } from '../state/blog.state';

const initialState: IBlogStateAuth = {
  logging: false,
  loginError: null,
  loginInfo: null,
  userData: null,
}

export default createReducer(
  initialState,
  on(fromActions.Login, (state) => ({
    ...state,
    logging: true,
    loginError: null,
  })),
  on(fromActions.LoginSuccess, (state, loginInfo) => ({
    ...state,
    logging: false,
    loginInfo,
  })),
  on(fromActions.LoginFailed, (state, loginError) => ({
    ...state,
    logging: false,
    loginError,
  })),

  on(fromActions.UserDataLoadSuccess, (state, userData) => ({
    ...state,
    userData,
  })),
  on(fromActions.UserDataLoadFailed, (state) => ({
    ...state,
    userData: null,
  })),

  on(fromActions.Logout, (state) => ({
    ...state,
    userData: null,
  })),
  on(fromActions.LogoutSuccess, (state) => ({
    ...state,
    userData: null,
  })),
  on(fromActions.LogoutFailed, (state) => ({
    ...state,
    userData: null,
  })),
)

