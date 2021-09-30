import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthFormModule } from '../_utils/components/auth-form/auth-form.module';
import { LoginModule } from './auth-login/login.module';
import { RegistrationModule } from './auth-registration/registration.module';
import { AuthComponent } from './auth.component';

const module = [
  AuthFormModule,
  LoginModule,
  RegistrationModule,
]

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
