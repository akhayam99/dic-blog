import { createAction, props } from '@ngrx/store';
import { LoginError, LoginParams, LoginResponse } from '../../services/auth/login.service';

const prefix = '[blog-auth] - ';

export const Login = createAction(prefix + 'Login', props<LoginParams>());
export const LoginSuccess = createAction(prefix + 'LoginSuccess', props<LoginResponse>());
export const LoginFailed = createAction(prefix + 'LoginFailed', props<LoginError>());

export const GoToAuthLogin = createAction(prefix + 'GoToAuthLogin');
export const GoToAuthRegistration = createAction(prefix + 'GoToAuthRegistration');


export const UserDataLoadSuccess = createAction(prefix + 'UserDataLoadSuccess', props<any>());
export const UserDataLoadFailed = createAction(prefix + 'UserDataLoadFailed', props<any>());
