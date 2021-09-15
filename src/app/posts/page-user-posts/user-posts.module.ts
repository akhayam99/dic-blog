import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserModule } from 'src/app/_utils/components/user/user.module';
import { UserPostsComponent } from './user-posts.component';

@NgModule({
  declarations: [
    UserPostsComponent,
  ],
  imports: [
    CommonModule,
    UserModule,
    RouterModule
  ],
  exports: [
    UserPostsComponent
  ]
})
export class UserPostsModule { }
