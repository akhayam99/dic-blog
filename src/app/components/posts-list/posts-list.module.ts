import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list.component';
import { PostModule } from '../post/post.module';
import { LoaderModule } from '../loader/loader.module';
import { RouterModule } from '@angular/router';

const module = [
  CommonModule,
  LoaderModule,
  PostModule,
];

@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    ...module,
    RouterModule,
  ],
  exports: [
    PostsListComponent
  ]
})
export class PostsListModule { }
