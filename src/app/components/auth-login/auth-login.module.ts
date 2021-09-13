import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { AuthLoginComponent } from './auth-login.component';

const module = [
  CustomInputModule,
  FormsModule,
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
