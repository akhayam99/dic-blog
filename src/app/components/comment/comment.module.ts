import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UserModule } from '../user/user.module';
import { CommentComponent } from './comment.component';

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
