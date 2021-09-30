import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { AuthFormComponent } from './auth-form.component';


const module = [
  UtilsFormModule,
]

@NgModule({
  declarations: [
    AuthFormComponent
  ],
  imports: [
    ...module,
    CommonModule
  ],
  exports: [
    AuthFormComponent
  ]
})
export class AuthFormModule { }
