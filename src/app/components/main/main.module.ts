import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PostsListModule } from '../posts-list/posts-list.module';
import { UsersListModule } from '../users-list/users-list.module';
import { RouterModule } from '@angular/router';

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
    }]
    ),
  ],
  exports: [
    MainComponent
  ],
})
export class MainModule { }
