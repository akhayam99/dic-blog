import { createSelector } from '@ngrx/store';
import { IBlogStateInfo } from '../state/blog.state';
import { infoSelector } from './feature.selectors';

const _getVersion = (state: IBlogStateInfo) => state && state.version;

export const getVersion = createSelector(infoSelector, _getVersion);
