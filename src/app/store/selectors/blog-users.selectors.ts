import { createSelector } from '@ngrx/store'
import { IBlogStateDataUsers } from '../state/blog.state'
import { userSelector } from './feature.selectors';

const _getUsers = (state:IBlogStateDataUsers) => state && state.users;

export const getUsers = createSelector(userSelector, _getUsers);
