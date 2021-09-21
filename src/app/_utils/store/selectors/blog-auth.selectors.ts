import { createSelector } from '@ngrx/store';
import { IBlogStateAuth } from '../state/blog.state';
import { authSelector } from './feature.selectors';

const _getLogging = (state:IBlogStateAuth) => state && state.logging;
const _getLoginError = (state:IBlogStateAuth) => state && state.loginError;

export const getLogging = createSelector(authSelector, _getLogging);
export const getLoginError = createSelector(authSelector, _getLoginError);
