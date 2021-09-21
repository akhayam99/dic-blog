import { createReducer, on } from '@ngrx/store';
import * as fromActions from "../actions";
import { IBlogStateAuth } from '../state/blog.state';

const initialState: IBlogStateAuth = {
  loginError: null,
  logging: false,
}

export default createReducer(
  initialState,
  on(fromActions.Login, (state) => ({
    ...state,
    logging: true,
    loginError: null,
  })),
  on(fromActions.LoginSuccess, (state) => ({
    ...state,
    logging: false,
  })),
  on(fromActions.LoginFailed, (state, loginError) => ({
    ...state,
    logging: false,
    loginError,
  })),
)

