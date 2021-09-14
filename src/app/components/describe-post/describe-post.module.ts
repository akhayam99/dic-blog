import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentModule } from '../comment/comment.module';
import { CommentsListModule } from '../comments-list/comments-list.module';
import { LoaderModule } from '../loader/loader.module';
import { PostModule } from '../post/post.module';
import { DescribePostComponent } from './describe-post.component';

const module = [
  CommentModule,
  LoaderModule,
  PostModule,
  CommentsListModule,
  RouterModule.forChild([{
    path: '',
    component: DescribePostComponent,
  }]),
]

@NgModule({
  declarations: [
    DescribePostComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    DescribePostComponent
  ]
})
export class DescribePostModule { }
