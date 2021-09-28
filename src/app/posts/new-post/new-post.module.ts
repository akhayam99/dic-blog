import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubmitModule } from 'src/app/_utils/components/form/submit/submit.module';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { NewPostComponent } from './new-post.component';



@NgModule({
  declarations: [
    NewPostComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: NewPostComponent }]),
    SubmitModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UtilsFormModule,
  ],
  exports: [
    NewPostComponent
  ]
})
export class NewPostModule { }
