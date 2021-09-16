import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentModule } from 'src/app/_utils/components/comment/comment.module';
import { UserModule } from 'src/app/_utils/components/user/user.module';
import { PipesModule } from 'src/app/_utils/pipes/pipes.module';
import { CommentListComponent } from './comment-list.component';

@NgModule({
  declarations: [
    CommentListComponent,
  ],
  imports: [
    CommentModule,
    CommonModule,
    PipesModule,
    UserModule,
  ],
  exports: [
    CommentListComponent
  ]
})
export class CommentListModule { }
