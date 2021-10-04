import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthFormModule } from "src/app/_utils/components/auth-form/auth-form.module";
import { ButtonModule } from "src/app/_utils/components/form/button/button.module";
import { LoaderModule } from "src/app/_utils/components/loader/loader.module";
import { UserModule } from "src/app/_utils/components/user/user.module";
import { LoginModule } from "./auth-login/login.module";
import { RegistrationModule } from "./auth-registration/registration.module";
import { AuthComponent } from "./auth.component";


const module = [
  AuthFormModule,
  ButtonModule,
  LoaderModule,
  LoginModule,
  RegistrationModule,
  UserModule,
];

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
