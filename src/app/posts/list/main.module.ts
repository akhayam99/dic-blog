import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsListModule } from '../list/post/posts-list.module';
import { UsersListModule } from '../list/user/users-list.module';
import { MainComponent } from './main.component';

const module = [
  PostsListModule,
  UsersListModule,
  RouterModule.forChild([{ path: '', component: MainComponent }]),
]
@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    MainComponent
  ],
})
export class MainModule { }
