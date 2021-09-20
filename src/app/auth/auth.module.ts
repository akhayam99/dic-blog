import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFormModule } from 'src/app/_utils/components/auth-form/auth-form.module';
import { LoginModule } from './login/form/login.module';
import { LoginPageComponent } from './login/login-page.component';
import { RegistrationModule } from './registration/form/registration.module';
import { RegistrationPageComponent } from './registration/registration-page.component';

@NgModule({
  declarations: [
    RegistrationPageComponent,
    LoginPageComponent,
  ],
  imports: [
    AuthFormModule,
    CommonModule,
    LoginModule,
    RegistrationModule,
    RouterModule.forChild([
      { path: 'login', component: LoginPageComponent },
      { path: 'registration', component: RegistrationPageComponent },
    ]),
    CommonModule,
  ]
})

export class LoginPageModule { }

export class RegistrationPageModule { }
