import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFormModule } from 'src/app/_utils/components/auth-form/auth-form.module';
import { LoginPageComponent } from './login-page.component';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    AuthFormModule,
    CommonModule,
    LoginModule,
    RouterModule.forChild([{ path: '', component: LoginPageComponent }]),
  ],
  exports: [
    LoginPageComponent
  ]
})
export class LoginPageModule { }
