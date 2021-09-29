import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubmitModule } from 'src/app/_utils/components/form/submit/submit.module';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { NewPostComponent } from './new-post.component';

const module = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild([{ path: '', component: NewPostComponent }]),
  SubmitModule,
  UtilsFormModule,
]

@NgModule({
  declarations: [
    NewPostComponent
  ],
  imports: [
    ...module,
    CommonModule
  ],
  exports: [
    NewPostComponent
  ]
})
export class NewPostModule { }
