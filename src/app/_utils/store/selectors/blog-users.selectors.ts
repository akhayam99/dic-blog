import { createSelector } from '@ngrx/store';
import { IBlogStateDataUsers } from '../state/blog.state';
import { userSelector } from './feature.selectors';

const _getUsers = (state:IBlogStateDataUsers) => state && state.users;
const _getLoadingUsers = (state:IBlogStateDataUsers) => state && state.loading;

export const getUsers = createSelector(userSelector, _getUsers);
export const getLoadingUsers = createSelector(userSelector, _getLoadingUsers);
