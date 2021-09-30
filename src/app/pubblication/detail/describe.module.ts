import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModule } from 'src/app/_utils/components/loader/loader.module';
import { PostModule } from 'src/app/_utils/components/post/post.module';
import { CommentsModule } from './comments/comments.module';
import { DescribeComponent } from './describe.component';
import { InteractionsModule } from './interactions/interactions.module';

const module = [
  CommentsModule,
  LoaderModule,
  InteractionsModule,
  PostModule,
  RouterModule.forChild([{ path: '', component: DescribeComponent }]),
]

@NgModule({
  declarations: [
    DescribeComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    DescribeComponent
  ]
})
export class DescribeModule { }
