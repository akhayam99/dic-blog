import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomInputComponent } from './custom-input.component';



@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CustomInputComponent
  ]
})
export class CustomInputModule { }
