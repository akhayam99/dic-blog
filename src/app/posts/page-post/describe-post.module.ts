import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentModule } from '../../_utils/components/comment/comment.module';
import { LoaderModule } from '../../_utils/loader/loader.module';
import { PostModule } from '../../_utils/post/post.module';
import { CommentsListModule } from '../detail/comments/comments-list.module';
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
