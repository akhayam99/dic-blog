import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginModule } from 'src/app/auth/auth-login/login.module';
import { RegistrationModule } from 'src/app/auth/auth-registration/registration.module';
import { AuthModule } from 'src/app/auth/auth.module';
import { UserModule } from 'src/app/_utils/components/user/user.module';
import { ShoulderComponent } from './shoulder.component';

@NgModule({
  declarations: [
    ShoulderComponent
  ],
  imports: [
    AuthModule,
    CommonModule,
    LoginModule,
    RegistrationModule,
    UserModule,
  ],
  exports: [
    ShoulderComponent
  ]
})
export class ShoulderModule { }
