import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputModule } from '../input/input.module';
import { PasswordComponent } from './password.component';



@NgModule({
  declarations: [
    PasswordComponent
  ],
  imports: [
    CommonModule,
    InputModule
  ],
  exports: [
    PasswordComponent
  ]
})
export class PasswordModule { }
