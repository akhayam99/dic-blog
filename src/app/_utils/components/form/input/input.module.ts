import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ErrorsModule } from '../errors/errors.module';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    ErrorsModule,
    FormsModule,
  ],
  exports: [
    InputComponent
  ]
})
export class InputModule { }
