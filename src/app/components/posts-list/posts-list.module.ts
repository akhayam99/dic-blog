import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { PostModule } from '../post/post.module';
import { PostsListComponent } from './posts-list.component';

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
