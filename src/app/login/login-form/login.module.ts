import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilsFormModule } from '../../_utils/components/form/utils.form.module';
import { AuthComponent } from '../page-login/auth.component';
import { LoginComponent } from './login.component';

const module = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild([{ path: '', component: AuthComponent }]),
  UtilsFormModule,
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class AuthLoginModule { }
