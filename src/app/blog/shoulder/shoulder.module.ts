import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UserModule } from "src/app/_utils/components/user/user.module";
import { LoginModule } from "./auth/auth-login/login.module";
import { RegistrationModule } from "./auth/auth-registration/registration.module";
import { AuthModule } from "./auth/auth.module";
import { ShoulderComponent } from "./shoulder.component";

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
