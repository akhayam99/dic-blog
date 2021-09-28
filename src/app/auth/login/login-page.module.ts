import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFormModule } from 'src/app/_utils/components/auth-form/auth-form.module';
import { RegistrationModule } from '../registration/form/registration.module';
import { LoginModule } from './form/login.module';
import { LoginPageComponent } from './login-page.component';

const module = [
  AuthFormModule,
  LoginModule,
  RegistrationModule,
  RouterModule.forChild([{ path: '', component: LoginPageComponent }]),
]
@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ]
})

export class LoginPageModule { }
