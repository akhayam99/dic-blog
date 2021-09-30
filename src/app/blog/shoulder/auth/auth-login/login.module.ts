import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { LoginComponent } from './login.component';

const module = [
  ReactiveFormsModule,
  UtilsFormModule,
]

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
