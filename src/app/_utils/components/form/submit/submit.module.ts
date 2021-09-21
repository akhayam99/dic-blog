import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { SubmitComponent } from './submit.component';

@NgModule({
  declarations: [
    SubmitComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
  ],
  exports: [
    SubmitComponent
  ]
})
export class SubmitModule { }
