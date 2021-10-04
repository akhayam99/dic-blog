import { createReducer, on } from '@ngrx/store';
import { LoadUsers, LoadUsersFailed, LoadUsersSuccess, LogoutSuccess } from '..';
import { IBlogStateDataUsers } from '../state/blog.state';

const initialState: IBlogStateDataUsers = {
  loading: false,
  users: [],
}

export default createReducer(
  initialState,
  on(LoadUsers, state => ({
    ...state,
    users: [],
    loading: true,
  })),
  on(LoadUsersSuccess, (state, {users}) => ({
    ...state,
    users,
    loading: false,
  })),
  on(LoadUsersFailed, state => ({
    ...state,
    users: [],
    loading: false,
  })),

  on(LogoutSuccess, (state) => ({
    ...state,
    users: null,
  })),
)
