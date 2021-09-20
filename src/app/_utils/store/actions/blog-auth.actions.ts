import { createAction } from '@ngrx/store';

const prefix = '[blog-auth] - ';

export const GoToAuthLogin = createAction(prefix + 'GoToAuthLogin');
export const GoToAuthRegistration = createAction(prefix + 'GoToAuthRegistration');
