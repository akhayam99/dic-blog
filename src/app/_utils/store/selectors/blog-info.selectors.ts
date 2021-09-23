import { createSelector } from '@ngrx/store';
import { IBlogStateInfo } from '../state/blog.state';
import { infoSelector } from './feature.selectors';

const _getVersion = (state: IBlogStateInfo) => state && state.versionInfo;

export const getVersion = createSelector(infoSelector, _getVersion);
