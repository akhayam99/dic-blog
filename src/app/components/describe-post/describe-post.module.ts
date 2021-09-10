import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescribePostComponent } from './describe-post.component';
import { LoaderModule } from '../loader/loader.module';
import { PostModule } from '../post/post.module';
import { RouterModule } from '@angular/router';
import { CommentModule } from '../comment/comment.module';

@NgModule({
  declarations: [
    DescribePostComponent
  ],
  imports: [
    CommentModule,
    CommonModule,
    LoaderModule,
    PostModule,
    RouterModule.forChild([{
      path: '',
      component: DescribePostComponent,
    }]),
  ],
  exports: [
    DescribePostComponent
  ]
})
export class DescribePostModule { }
