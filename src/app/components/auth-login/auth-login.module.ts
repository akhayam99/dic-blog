import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../page-login/auth.component';
import { UtilsFormModule } from '../_utils/form/utils.form.module';
import { AuthLoginComponent } from './auth-login.component';

const module = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild([{ path: '', component: AuthComponent }]),
  UtilsFormModule,
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
