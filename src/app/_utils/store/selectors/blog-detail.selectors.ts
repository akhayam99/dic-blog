import { createSelector } from '@ngrx/store';
import { IBlogStateDataDetail } from '../state/blog.state';
import { detailSelector } from './feature.selectors';

const _getComments = (state:IBlogStateDataDetail) => state && state.comments;
const _getLoadingPost = (state:IBlogStateDataDetail) => state && state.loading;
const _getPost = (state:IBlogStateDataDetail) => state && state.post;
const _getPostId = (state:IBlogStateDataDetail) => state && state.post;

export const getComments = createSelector(detailSelector, _getComments);
export const getLoadingPost = createSelector(detailSelector, _getLoadingPost);
export const getPost = createSelector(detailSelector, _getPost);
export const getPostId = createSelector(detailSelector, _getPostId);
