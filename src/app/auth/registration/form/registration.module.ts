import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { RegistrationComponent } from './registration.component';

const module = [
  ReactiveFormsModule,
  UtilsFormModule,
]

@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    ...module,
    CommonModule
  ],
  exports: [
    RegistrationComponent
  ]
})
export class RegistrationModule { }
