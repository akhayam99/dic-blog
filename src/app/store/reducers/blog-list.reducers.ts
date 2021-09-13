import { createReducer, on } from '@ngrx/store';
import * as fromActions from "../actions";
import { IBlogStateDataList } from '../state/blog.state';

const initialState: IBlogStateDataList = {
  loading: false,
  posts: [],
}

export default createReducer(
  initialState,
  on(fromActions.LoadPosts, state => ({
    ...state,
    loading: true
  })),
  on(fromActions.LoadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false
  })),
  on(fromActions.LoadPostsFailed, (state) => ({
    ...state,
    posts: [],
    loading: false
  })),

  on(fromActions.LoadPostsFromUser, state => ({
    ...state,
    loading: true
  })),
  on(fromActions.LoadPostsFromUserSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false
  })),
  on(fromActions.LoadPostsFromUserFailed, (state) => ({
    ...state,
    posts: [],
    loading: false
  })),
)

