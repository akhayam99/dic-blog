import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputModule } from '../input/input.module';
import { TextareaComponent } from './textarea.component';

@NgModule({
  declarations: [
    TextareaComponent
  ],
  imports: [
    CommonModule,
    InputModule,
  ],
  exports: [
    TextareaComponent
  ]
})
export class TextareaModule { }
