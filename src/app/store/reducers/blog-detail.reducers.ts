import { createReducer, on } from '@ngrx/store';
import * as fromActions from "../actions";
import { IBlogStateDataDetail } from '../state/blog.state';

const initialState: IBlogStateDataDetail = {
  comments: [],
  loading: false,
  post: null,
}

export default createReducer(
  initialState,
  on(fromActions.LoadPost, state => ({
    ...state,
    loading: true
  })),
  on(fromActions.LoadPostSuccess, (state, {post}) => ({
    ...state,
    post,
    loading: false
  })),
  on(fromActions.LoadPostFailed, (state) => ({
    ...state,
    posts: [],
    loading: false
  })),

  on(fromActions.LoadComments, state => ({
    ...state
  })),
  on(fromActions.LoadCommentsSuccess, (state, {comments}) => ({
    ...state,
    comments,
  })),
  on(fromActions.LoadCommentsFailed, (state) => ({
    ...state,
    comments: [],
    loadingPosts: false
  })),
)

