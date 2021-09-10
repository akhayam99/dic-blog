import { createReducer, on } from '@ngrx/store';
import * as fromActions from "../actions";
import { IBlogStateDataUsers } from '../state/blog.state';

const initialState: IBlogStateDataUsers = {
  loading: false,
  users: [],
}

export default createReducer(
  initialState,
  on(fromActions.LoadUsers, state => ({
    ...state,
  })),
  on(fromActions.LoadUsersSuccess, (state, {users}) => ({
    ...state,
    users,
  })),
  on(fromActions.LoadUsersFailed, state => ({
    ...state,
    users: [],
  })),
)
