import { createAction, props } from '@ngrx/store';
import { IComment } from 'src/app/interfaces/IComment';
import { IPost } from 'src/app/interfaces/IPost';

const prefix = '[blog-detail] - ';

export const LoadComments = createAction(prefix + 'LoadComments');
export const LoadCommentsFailed = createAction(prefix + 'LoadCommentsFailed', props<{error: any}>());
export const LoadCommentsSuccess = createAction(prefix + 'LoadCommentsSuccess', props<{comments: IComment[]}>());

export const LoadPost = createAction(prefix + 'LoadPost');
export const LoadPostFailed = createAction(prefix + 'LoadPostFailed', props<{error: any}>());
export const LoadPostSuccess = createAction(prefix + 'LoadPostSuccess', props<{post: IPost}>());
