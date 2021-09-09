import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { UserModule } from '../user/user.module';

const module = [
  UserModule,
];

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule { }
