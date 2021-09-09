import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post.component';
import { UserModule } from '../user/user.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CommentModule } from '../comment/comment.module';

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
