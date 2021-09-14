import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentModule } from '../_utils/component/comment/comment.module';
import { CommentsListComponent } from './comments-list.component';

@NgModule({
  declarations: [
    CommentsListComponent
  ],
  imports: [
    CommonModule,
    CommentModule
  ],
  exports: [
    CommentsListComponent
  ]
})
export class CommentsListModule { }
