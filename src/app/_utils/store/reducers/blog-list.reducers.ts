import { createReducer, on } from '@ngrx/store';
import { LoadPosts, LoadPostsAfterNavigation, LoadPostsAfterNavigationFailed, LoadPostsAfterNavigationSuccess, LoadPostsFailed, LoadPostsFromUser, LoadPostsFromUserFailed, LoadPostsFromUserSuccess, LoadPostsSuccess, LogoutSuccess, UnsetPostsFromUser } from '..';
import { IBlogStateDataList } from '../state/blog.state';

const initialState: IBlogStateDataList = {
  loading: false,
  posts: [],
  user: null,
}

export default createReducer(
  initialState,
  on(LoadPosts, state => ({
    ...state,
    loading: true
  })),
  on(LoadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false
  })),
  on(LoadPostsFailed, (state) => ({
    ...state,
    posts: [],
    loading: false
  })),

  on(LoadPostsFromUser, (state, { user }) => ({
    ...state,
    user,
  })),
  on(LoadPostsFromUserSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false,
  })),
  on(LoadPostsFromUserFailed, (state) => ({
    ...state,
    posts: [],
    loading: false,
  })),

  on(LoadPostsAfterNavigation, state => ({
    ...state,
    loading: true
  })),
  on(LoadPostsAfterNavigationSuccess, (state, { posts }) => ({
    ...state,
    posts,
    loading: false
  })),
  on(LoadPostsAfterNavigationFailed, (state) => ({
    ...state,
    posts: [],
    loading: false
  })),

  on(UnsetPostsFromUser, (state) => ({
    ...state,
    user: null,
  })),

  on(LogoutSuccess, (state) => ({
    ...state,
    posts: [],
    user: null,
  })),
)

