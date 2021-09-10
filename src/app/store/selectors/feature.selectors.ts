import { createFeatureSelector, createSelector } from '@ngrx/store'
import { IBlogStateData } from '../state/blog.state';

export const dataSelector = createFeatureSelector<IBlogStateData>('data');
export const detailSelector = createSelector(dataSelector, (state: IBlogStateData) => state && state.detail);
export const listSelector = createSelector(dataSelector, (state: IBlogStateData) => state && state.list);
export const userSelector = createSelector(dataSelector, (state: IBlogStateData) => state && state.users);

