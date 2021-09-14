import { createAction, props } from '@ngrx/store';
import { IUser } from 'src/app/_utils/interfaces/IUser';

const prefix = '[blog] - ';

export const LoadUsers = createAction(prefix + 'LoadUsers');
export const LoadUsersFailed = createAction(prefix + 'LoadUsersFailed', props<{error: any}>());
export const LoadUsersSuccess = createAction(prefix + 'LoadUsersSuccess', props<{users: IUser[]}>());
