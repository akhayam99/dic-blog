import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CommentModule } from '../comment/comment.module';
import { UserModule } from '../user/user.module';
import { PostComponent } from './post.component';

const module = [
  CommentModule,
  CommonModule,
  PipesModule,
  UserModule,
];

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    ...module,
  ],
  exports: [
    PostComponent
  ]
})

export class PostModule { }
