import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/_utils/interfaces/IPost';

const prefix = '[blog-list] - ';

export const LoadPosts = createAction(prefix + 'LoadPosts');
export const LoadPostsFailed = createAction(prefix + 'LoadPostsFailed', props<{error: any}>());
export const LoadPostsSuccess = createAction(prefix + 'LoadPostsSuccess', props<{posts: IPost[]}>());

export const LoadPostsFromUser = createAction(prefix + 'LoadPostsFromUser');
export const LoadPostsFromUserFailed = createAction(prefix + 'LoadPostsFromUserFailed', props<{error: any}>());
export const LoadPostsFromUserSuccess = createAction(prefix + 'LoadPostsFromUserSuccess', props<{posts: IPost[]}>());

export const GoToPostDetail = createAction(prefix + 'GoToPostDetail', props<{id: number}>());
