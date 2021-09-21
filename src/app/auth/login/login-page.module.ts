import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFormModule } from 'src/app/_utils/components/auth-form/auth-form.module';
import { RegistrationModule } from '../registration/form/registration.module';
import { LoginModule } from './form/login.module';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    AuthFormModule,
    CommonModule,
    LoginModule,
    RegistrationModule,
    RouterModule.forChild([
      { path: '', component: LoginPageComponent },
    ]),
    CommonModule,
  ]
})

export class LoginPageModule { }
