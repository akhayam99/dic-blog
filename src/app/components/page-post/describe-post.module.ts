import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentsListModule } from '../comments-list/comments-list.module';
import { CommentModule } from '../_utils/component/comment/comment.module';
import { LoaderModule } from '../_utils/component/loader/loader.module';
import { PostModule } from '../_utils/component/post/post.module';
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
