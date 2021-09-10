import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/interfaces/IPost';

const prefix = '[blog-list] - ';

export const LoadPosts = createAction(prefix + 'LoadPosts');
export const LoadPostsFailed = createAction(prefix + 'LoadPostsFailed', props<{error: any}>());
export const LoadPostsSuccess = createAction(prefix + 'LoadPostsSuccess', props<{posts: IPost[]}>());
