import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFormModule } from 'src/app/_utils/components/auth-form/auth-form.module';
import { LoginModule } from '../login/form/login.module';
import { RegistrationModule } from './form/registration.module';
import { RegistrationPageComponent } from './registration-page.component';

@NgModule({
  declarations: [
    RegistrationPageComponent,
  ],
  imports: [
    AuthFormModule,
    CommonModule,
    LoginModule,
    RegistrationModule,
    RouterModule.forChild([
      { path: '', component: RegistrationPageComponent },
    ]),
    CommonModule,
  ]
})

export class RegistrationPageModule { }
