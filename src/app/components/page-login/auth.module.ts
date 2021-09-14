import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthLoginModule } from '../auth-login/auth-login.module';
import { AuthComponent } from './auth.component';

const module = [
  AuthLoginModule,
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
