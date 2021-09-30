import { createReducer, on } from '@ngrx/store';
import { LoadActiveURL, LoadVersionFailed, LoadVersionSuccess } from '..';
import { IBlogStateInfo } from '../state/blog.state';

const initialState: IBlogStateInfo = {
  activeURL: null,
  versionInfo: null,
  versionError: null,
}

export default createReducer(
  initialState,
  on(LoadVersionSuccess, (state, versionInfo) => ({
    ...state,
    versionInfo,
    versionError: null
  })),
  on(LoadVersionFailed, (state, versionError) => ({
    ...state,
    versionInfo: null,
    versionError,
  })),

  on(LoadActiveURL, (state, {activeURL}) => ({
    ...state,
    activeURL,
  })),
)

