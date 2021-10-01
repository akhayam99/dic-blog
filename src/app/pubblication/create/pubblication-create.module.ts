import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubmitModule } from 'src/app/_utils/components/form/submit/submit.module';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { PubblicationCreateComponent } from './pubblication-create.component';


const module = [
  FormsModule,
  ReactiveFormsModule,
  RouterModule.forChild([{ path: '', component: PubblicationCreateComponent }]),
  SubmitModule,
  UtilsFormModule,
]

@NgModule({
  declarations: [
    PubblicationCreateComponent
  ],
  imports: [
    ...module,
    CommonModule
  ],
  exports: [
    PubblicationCreateComponent
  ]
})
export class PubblicationCreateModule { }
