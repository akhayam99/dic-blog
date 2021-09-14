import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { InputModule } from '../form/input/input.module';
import { PasswordModule } from '../form/password/password.module';
import { AuthLoginComponent } from './auth-login.component';

const module = [
  FormsModule,
  InputModule,
  PasswordModule,
  RouterModule.forChild([{ path: '', component: AuthComponent }]),
]

@NgModule({
  declarations: [
    AuthLoginComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    AuthLoginComponent
  ]
})
export class AuthLoginModule { }
