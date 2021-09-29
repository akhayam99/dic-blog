import { createSelector } from '@ngrx/store';
import { IBlogStateAuth } from '../state/blog.state';
import { authSelector } from './feature.selectors';

const _getIsLogged = (state: IBlogStateAuth) => state && !!state.loginInfo;
const _getLogging = (state: IBlogStateAuth) => state && state.logging;
const _getLoginError = (state: IBlogStateAuth) => state && state.loginError;
const _getLoginInfo = (state: IBlogStateAuth) => state && state.loginInfo;
const _getUserData = (state: IBlogStateAuth) => state && state.userData;
const _getShowLogin= (state: IBlogStateAuth) => state && state.showLogin;

export const getIsLogged = createSelector(authSelector, _getIsLogged);
export const getLogging = createSelector(authSelector, _getLogging);
export const getLoginError = createSelector(authSelector, _getLoginError);
export const getLoginInfo = createSelector(authSelector, _getLoginInfo);
export const getUserData = createSelector(authSelector, _getUserData);
export const getShowLogin = createSelector(authSelector, _getShowLogin);
