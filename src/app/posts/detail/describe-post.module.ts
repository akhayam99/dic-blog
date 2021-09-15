import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommentModule } from 'src/app/_utils/components/comment/comment.module';
import { LoaderModule } from 'src/app/_utils/components/loader/loader.module';
import { PostModule } from 'src/app/_utils/components/post/post.module';
import { CommentListModule } from './comments/comment-list.module';
import { DescribePostComponent } from './describe-post.component';

const module = [
  CommentModule,
  LoaderModule,
  PostModule,
  CommentListModule,
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
