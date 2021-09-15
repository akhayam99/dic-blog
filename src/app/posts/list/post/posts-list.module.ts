import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModule } from 'src/app/_utils/components/loader/loader.module';
import { PostModule } from 'src/app/_utils/components/post/post.module';
import { PostsListComponent } from './posts-list.component';

const module = [
  LoaderModule,
  PostModule,
  RouterModule,
];

@NgModule({
  declarations: [
    PostsListComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    PostsListComponent
  ]
})
export class PostsListModule { }
