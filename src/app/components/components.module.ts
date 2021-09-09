import { CommentModule } from './comment/comment.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { PostsListModule } from './posts-list/posts-list.module';
import { LoaderComponent } from './loader/loader.component';
import { LoaderModule } from './loader/loader.module';

const modules = [
  CommentModule,
  LoaderModule,
  PostModule,
  PostsListModule,
  UserModule,
]

@NgModule({
  imports: [
    ...modules,
    CommonModule
  ],
  exports: modules,
  declarations: [ ]
})

export class ComponentsModule { }
