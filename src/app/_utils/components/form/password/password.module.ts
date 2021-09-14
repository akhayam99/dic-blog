import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ErrorsModule } from '../errors/errors.module';
import { InputModule } from '../input/input.module';
import { PasswordComponent } from './password.component';



@NgModule({
  declarations: [
    PasswordComponent
  ],
  imports: [
    CommonModule,
    ErrorsModule,
    InputModule,
  ],
  exports: [
    PasswordComponent
  ]
})
export class PasswordModule { }
