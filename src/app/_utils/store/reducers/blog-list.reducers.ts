import { createReducer, on } from '@ngrx/store';
import * as fromActions from "../actions";
import { IBlogStateDataList } from '../state/blog.state';

const initialState: IBlogStateDataList = {
  loading: false,
  posts: [],
  user: null,
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

  on(fromActions.LoadPostsFromUser, (state, { user }) => ({
    ...state,
    user,
  })),
  on(fromActions.LoadPostsFromUserSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false,
  })),
  on(fromActions.LoadPostsFromUserFailed, (state) => ({
    ...state,
    posts: [],
    loading: false,
  })),

  on(fromActions.LoadPostsAfterNavigation, state => ({
    ...state,
    loading: true
  })),
  on(fromActions.LoadPostsAfterNavigationSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false
  })),
  on(fromActions.LoadPostsAfterNavigationFailed, (state) => ({
    ...state,
    posts: [],
    loading: false
  })),

  on(fromActions.UnsetPostsFromUser, (state) => ({
    ...state,
    user: null,
  })),
)

