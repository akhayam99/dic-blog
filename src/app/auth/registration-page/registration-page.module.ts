import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthFormModule } from 'src/app/_utils/components/auth-form/auth-form.module';
import { RegistrationPageComponent } from './registration-page.component';
import { RegistrationModule } from './registration/registration.module';

@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    AuthFormModule,
    CommonModule,
    RegistrationModule,
    RouterModule.forChild([{ path: '', component: RegistrationPageComponent }]),
  ],
  exports: [
    RegistrationPageComponent
  ]
})
export class RegistrationPageModule { }
