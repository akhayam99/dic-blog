import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewPostComponent } from './new-post.component';



@NgModule({
  declarations: [
    NewPostComponent
  ],
  imports: [
    RouterModule.forChild([{ path: '', component: NewPostComponent }]),
    CommonModule
  ],
  exports: [
    NewPostComponent
  ]
})
export class NewPostModule { }
