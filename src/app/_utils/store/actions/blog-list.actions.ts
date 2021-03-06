import { createAction, props } from '@ngrx/store';
import { IPost } from 'src/app/_utils/interfaces/IPost';
import { IUser } from '../../interfaces/IUser';

const prefix = '[blog-list] - ';

export const LoadPosts = createAction(prefix + 'LoadPosts');
export const LoadPostsFailed = createAction(prefix + 'LoadPostsFailed', props<{ error: any }>());
export const LoadPostsSuccess = createAction(prefix + 'LoadPostsSuccess', props<{ posts: IPost[] }>());

export const LoadPostsFromUser = createAction(prefix + 'LoadPostsFromUser', props<{ user: IUser }>());
export const LoadPostsFromUserFailed = createAction(prefix + 'LoadPostsFromUserFailed', props<{ error: any }>());
export const LoadPostsFromUserSuccess = createAction(prefix + 'LoadPostsFromUserSuccess', props<{ posts: IPost[] }>());

export const LoadPostsAfterNavigation = createAction(prefix + 'LoadPostsAfterNavigation');
export const LoadPostsAfterNavigationFailed = createAction(prefix + 'LoadPostsAfterNavigationFailed', props<{ error: any }>());
export const LoadPostsAfterNavigationSuccess = createAction(prefix + 'LoadPostsAfterNavigationSuccess', props<{ posts: IPost[] }>());

export const UnsetPostsFromUser = createAction(prefix + 'UnsetPostsFromUser');

export const UpdateUserList = createAction(prefix + 'UpdateUserList', props<{ full_name: string }>());
