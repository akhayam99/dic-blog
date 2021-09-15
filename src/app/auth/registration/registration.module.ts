import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { RegistrationComponent } from './registration.component';

const module = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
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
