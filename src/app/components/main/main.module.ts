import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostsListModule } from '../posts-list/posts-list.module';
import { UsersListModule } from '../users-list/users-list.module';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    PostsListModule,
    UsersListModule,
    RouterModule.forChild([{
      path: '',
      component: MainComponent,
    }]),
  ],
  exports: [
    MainComponent
  ],
})
export class MainModule { }
