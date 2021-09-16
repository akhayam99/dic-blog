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
    users: [],
    loading: true,
  })),
  on(fromActions.LoadUsersSuccess, (state, {users}) => ({
    ...state,
    users,
    loading: false,
  })),
  on(fromActions.LoadUsersFailed, state => ({
    ...state,
    users: [],
    loading: false,
  })),
)
