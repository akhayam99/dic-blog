import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentModule } from 'src/app/_utils/components/comment/comment.module';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { HideBlockModule } from 'src/app/_utils/components/hide-block/hide-block.module';
import { UserModule } from 'src/app/_utils/components/user/user.module';
import { PipesModule } from 'src/app/_utils/pipes/pipes.module';
import { CommentsComponent } from './comments.component';

const module = [
  CommentModule,
  FormsModule,
  HideBlockModule,
  PipesModule,
  ReactiveFormsModule,
  UserModule,
  UtilsFormModule,
]

@NgModule({
  declarations: [
    CommentsComponent,
  ],
  imports: [
    ...module,
    CommonModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
