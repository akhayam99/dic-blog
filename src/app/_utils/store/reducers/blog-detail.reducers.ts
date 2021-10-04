import { createReducer, on } from '@ngrx/store';
import { LoadComments, LoadCommentsFailed, LoadCommentsSuccess, LoadPost, LoadPostFailed, LoadPostSuccess, LogoutSuccess } from '../actions';
import { IBlogStateDataDetail } from '../state/blog.state';

const initialState: IBlogStateDataDetail = {
  comments: [],
  loading: false,
  post_id: null,
  post: null,
}

export default createReducer(
  initialState,
  on(LoadPost, (state, {post_id}) => ({
    ...state,
    comments: [],
    loading: true,
    post_id,
    post: null,
  })),
  on(LoadPostSuccess, (state, {post}) => ({
    ...state,
    loading: false,
    post,
  })),
  on(LoadPostFailed, (state) => ({
    ...state,
    loading: false,
    posts: [],
  })),

  on(LoadComments, state => ({
    ...state,
    comments: [],
  })),
  on(LoadCommentsSuccess, (state, {comments}) => ({
    ...state,
    comments,
  })),
  on(LoadCommentsFailed, (state) => ({
    ...state,
    comments: [],
  })),

  on(LogoutSuccess, (state) => ({
    ...state,
    comments: [],
    loading: false,
    post_id: null,
    post: null,
  })),
)

