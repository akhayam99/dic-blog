import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentModule } from 'src/app/_utils/components/comment/comment.module';
import { CommentListComponent } from './comment-list.component';

@NgModule({
  declarations: [
    CommentListComponent,
  ],
  imports: [
    CommentModule,
    CommonModule,
  ],
  exports: [
    CommentListComponent
  ]
})
export class CommentListModule { }
