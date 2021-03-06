import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from 'src/app/auth/login/form/login.module';
import { RegistrationModule } from 'src/app/auth/registration/form/registration.module';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { AuthFormComponent } from './auth-form.component';


const module = [
  LoginModule,
  RegistrationModule,
  UtilsFormModule,
]

@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    ...module,
    CommonModule
  ],
  exports: [
    AuthFormComponent
  ]
})
export class AuthFormModule { }
