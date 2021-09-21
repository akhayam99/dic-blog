import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBlogStateAuth, IBlogStateData } from '../state/blog.state';

export const authFeatureSelector = createFeatureSelector<IBlogStateAuth>('auth');
export const dataFeatureSelector = createFeatureSelector<IBlogStateData>('data');

export const detailSelector = createSelector(dataFeatureSelector, (state: IBlogStateData) => state && state.detail);
export const listSelector = createSelector(dataFeatureSelector, (state: IBlogStateData) => state && state.list);
export const userSelector = createSelector(dataFeatureSelector, (state: IBlogStateData) => state && state.users);
export const authSelector = createSelector(authFeatureSelector, (state: IBlogStateAuth) => state);

