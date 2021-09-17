import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UtilsFormModule } from 'src/app/_utils/components/form/utils.form.module';
import { PostsListModule } from '../list/post/posts-list.module';
import { UsersListModule } from '../list/user/users-list.module';
import { MainComponent } from './main.component';

const module = [
  PostsListModule,
  RouterModule.forChild([{ path: '', component: MainComponent }]),
  UsersListModule,
  UtilsFormModule,
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
