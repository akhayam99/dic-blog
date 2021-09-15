import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthFormModule } from './form/auth-form.module';

const module = [
  AuthFormModule,
  RouterModule.forChild([{ path: '', component: AuthComponent }]),
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
