import { createAction, props } from '@ngrx/store';
import { IComment } from 'src/app/_utils/interfaces/IComment';
import { IPost } from 'src/app/_utils/interfaces/IPost';
import { NewPost } from '../../services/api/post.service';

const prefix = '[blog-detail] - ';

export const AddPost = createAction(prefix + 'AddPost', props<NewPost>());
export const AddPostSuccess = createAction(prefix + 'AddPostSuccess');
export const AddPostFailed = createAction(prefix + 'AddPostFailed', props<{ error: any }>());

export const LoadComments = createAction(prefix + 'LoadComments', props<{ id: number }>());
export const LoadCommentsFailed = createAction(prefix + 'LoadCommentsFailed', props<{ error: any }>());
export const LoadCommentsSuccess = createAction(prefix + 'LoadCommentsSuccess', props<{ comments: IComment[] }>());

export const LoadPost = createAction(prefix + 'LoadPost', props<{ post_id: number }>());
export const LoadPostFailed = createAction(prefix + 'LoadPostFailed', props<{ error: any }>());
export const LoadPostSuccess = createAction(prefix + 'LoadPostSuccess', props<{ post: IPost }>());
