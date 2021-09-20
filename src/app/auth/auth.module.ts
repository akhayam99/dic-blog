import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFormModule } from 'src/app/_utils/components/auth-form/auth-form.module';
import { LoginModule } from './login/form/login.module';
import { LoginPageComponent } from './login/login-page.component';
import { RegistrationModule } from './registration/form/registration.module';
import { RegistrationPageComponent } from './registration/registration-page.component';

const module = [
  AuthFormModule,
  CommonModule,
  LoginModule,
  RegistrationModule,
  RouterModule.forChild([
    { path: 'login', component: LoginPageComponent },
    { path: 'registration', component: RegistrationPageComponent },
  ]),
];

@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    ...module,
    CommonModule
  ]
})

export class LoginPageModule { }
export class RegistrationPageModule { }
