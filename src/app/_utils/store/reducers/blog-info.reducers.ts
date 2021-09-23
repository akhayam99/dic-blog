import { createReducer, on } from '@ngrx/store';
import * as fromActions from "../actions";
import { IBlogStateInfo } from '../state/blog.state';

const initialState: IBlogStateInfo = {
  version: null,
}

export default createReducer(
  initialState,
  on(fromActions.LoadVersionSuccess, (state, version) => ({
    ...state,
    version,
  })),
  on(fromActions.LoadVersionFailed, (state, error) => ({
    ...state,
    version: error,
  })),
)

