import { NgModule } from '@angular/core';
import { ErrorsModule } from './errors/errors.module';
import { InputModule } from './input/input.module';
import { PasswordModule } from './password/password.module';
import { SubmitModule } from './submit/submit.module';

@NgModule({
  exports: [
    ErrorsModule,
    InputModule,
    PasswordModule,
    SubmitModule
  ]
})
export class UtilsFormModule { }
