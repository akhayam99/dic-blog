import { createAction, props } from "@ngrx/store";

const prefix = '[blog-navigation] - ';

export const NavToAuthLogin = createAction(prefix + 'NavToAuthLogin');
export const NavToAuthRegistration = createAction(prefix + 'NavToAuthRegistration');

export const NavToPosts = createAction(prefix + 'NavToPosts');
export const NavToNewPost = createAction(prefix + 'NavToNewPost');
export const NavToPostDetail = createAction(prefix + 'NavToPostDetail', props<{ id: number }>());
