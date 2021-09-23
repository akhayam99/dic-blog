import { createReducer, on } from '@ngrx/store';
import * as fromActions from "../actions";
import { IBlogStateInfo } from '../state/blog.state';

const initialState: IBlogStateInfo = {
  versionInfo: null,
  versionError: null,
}

export default createReducer(
  initialState,
  on(fromActions.LoadVersionSuccess, (state, versionInfo) => ({
    ...state,
    versionInfo,
    versionError: null
  })),
  on(fromActions.LoadVersionFailed, (state, versionError) => ({
    ...state,
    versionInfo: null,
    versionError,
  })),
)

