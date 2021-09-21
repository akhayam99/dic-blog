import { combineReducers } from '@ngrx/store';
import { default as auth } from './blog-auth.reducers';
import { default as detail } from './blog-detail.reducers';
import { default as list } from './blog-list.reducers';
import { default as users } from './blog-users.reducers';


export const dataReducer = combineReducers({
  detail,
  list,
  users,
});

export const reducer = combineReducers({
  data: dataReducer,
  auth
});
