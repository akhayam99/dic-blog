import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommentModule } from 'src/app/_utils/components/comment/comment.module';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { UserModule } from 'src/app/_utils/components/user/user.module';
import { PipesModule } from 'src/app/_utils/pipes/pipes.module';
import { CommentsComponent } from './comments.component';

@NgModule({
  declarations: [
    CommentsComponent,
  ],
  imports: [
    CommentModule,
    CommonModule,
    PipesModule,
    UserModule,
    UtilsFormModule,
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
