import { createAction, props } from '@ngrx/store';
import { LoginError, LoginParams, LoginResponse } from '../../services/auth/login.service';
import { RegisterError, RegisterParams, RegisterResponse } from '../../services/auth/register.service';

const prefix = '[blog-auth] - ';

export const Login = createAction(prefix + 'Login', props<LoginParams>());
export const LoginFailed = createAction(prefix + 'LoginFailed', props<LoginError>());
export const LoginSuccess = createAction(prefix + 'LoginSuccess', props<LoginResponse>());

export const Register = createAction(prefix + 'Register', props<RegisterParams>());
export const RegisterFailed = createAction(prefix + 'RegisterFailed', props<RegisterError>());
export const RegisterSuccess = createAction(prefix + 'RegisterSuccess', props<RegisterResponse>());

export const UserDataLoadFailed = createAction(prefix + 'UserDataLoadFailed', props<any>());
export const UserDataLoadSuccess = createAction(prefix + 'UserDataLoadSuccess', props<any>());

export const Logout = createAction(prefix + 'Logout');
export const LogoutFailed = createAction(prefix + 'LogoutFailed', props<any>());
export const LogoutSuccess = createAction(prefix + 'LogoutSuccess', props<any>());
