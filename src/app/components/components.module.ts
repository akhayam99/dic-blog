import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostsListModule } from './posts-list/posts-list.module';
import { UsersListModule } from './users-list/users-list.module';

const modules = [
  PostsListModule,
  UsersListModule,
]

@NgModule({
  imports: [
    ...modules,
    CommonModule
  ],
  exports: modules,
})

export class ComponentsModule { }
