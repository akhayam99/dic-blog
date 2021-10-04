import { createSelector } from '@ngrx/store';
import { IBlogStateAuth } from '../state/blog.state';
import { authSelector } from './feature.selectors';

const _getIsLogged = (state: IBlogStateAuth) => state && !!state.loginInfo;
const _getLoginError = (state: IBlogStateAuth) => state && state.loginError;
const _getLoginInfo = (state: IBlogStateAuth) => state && state.loginInfo;
const _getLoginLoader = (state: IBlogStateAuth) => state && state.loginLoader;
const _getLogoutLoader = (state: IBlogStateAuth) => state && state.logoutLoader;
const _getRegisterLoader = (state: IBlogStateAuth) => state && state.registerLoader;
const _getUserData = (state: IBlogStateAuth) => state && state.userData;

export const getIsLogged = createSelector(authSelector, _getIsLogged);
export const getLoginError = createSelector(authSelector, _getLoginError);
export const getLoginInfo = createSelector(authSelector, _getLoginInfo);
export const getLoginLoader = createSelector(authSelector, _getLoginLoader);
export const getLogoutLoader = createSelector(authSelector, _getLogoutLoader);
export const getRegisterLoader = createSelector(authSelector, _getRegisterLoader);
export const getUserData = createSelector(authSelector, _getUserData);
