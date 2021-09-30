import { createSelector } from '@ngrx/store';
import { IBlogStateInfo } from '../state/blog.state';
import { infoSelector } from './feature.selectors';

const _getActiveURL = (state: IBlogStateInfo) => state && state.activeURL;
const _getVersion = (state: IBlogStateInfo) => state && state.versionInfo;

export const getActiveURL = createSelector(infoSelector, _getActiveURL);
export const getVersion = createSelector(infoSelector, _getVersion);
