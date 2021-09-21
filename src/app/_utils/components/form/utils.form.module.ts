import { NgModule } from '@angular/core';
import { ButtonModule } from './button/button.module';
import { ErrorsModule } from './errors/errors.module';
import { InputModule } from './input/input.module';
import { PasswordModule } from './password/password.module';
import { SearchModule } from './search/search.module';
import { SubmitModule } from './submit/submit.module';
import { TextareaModule } from './textarea/textarea.module';

@NgModule({
  exports: [
    ButtonModule,
    ErrorsModule,
    InputModule,
    PasswordModule,
    SearchModule,
    SubmitModule,
    TextareaModule,
  ]
})
export class UtilsFormModule { }
