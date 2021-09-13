import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { AuthComponent } from './auth.component';

const module = [
  CustomInputModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: AuthComponent,
    }]),
];

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    AuthComponent
  ]
})
export class AuthModule { }
