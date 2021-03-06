import { createReducer, on } from '@ngrx/store';
import * as fromActions from "../actions";
import { IBlogStateDataDetail } from '../state/blog.state';

const initialState: IBlogStateDataDetail = {
  comments: [],
  loading: false,
  post_id: null,
  post: null,
}

export default createReducer(
  initialState,
  on(fromActions.LoadPost, (state, {post_id}) => ({
    ...state,
    comments: [],
    loading: true,
    post_id,
    post: null,
  })),
  on(fromActions.LoadPostSuccess, (state, {post}) => ({
    ...state,
    loading: false,
    post,
  })),
  on(fromActions.LoadPostFailed, (state) => ({
    ...state,
    loading: false,
    posts: [],
  })),

  on(fromActions.LoadComments, state => ({
    ...state,
    comments: [],
  })),
  on(fromActions.LoadCommentsSuccess, (state, {comments}) => ({
    ...state,
    comments,
  })),
  on(fromActions.LoadCommentsFailed, (state) => ({
    ...state,
    comments: [],
  })),
)

