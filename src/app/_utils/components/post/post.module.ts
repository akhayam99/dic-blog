import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/_utils/pipes/pipes.module';
import { CommentModule } from '../components/comment/comment.module';
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
