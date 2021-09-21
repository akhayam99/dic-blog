import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderModule } from '../../loader/loader.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
  ],
  exports: [
    ButtonComponent
  ]
})
export class ButtonModule { }
