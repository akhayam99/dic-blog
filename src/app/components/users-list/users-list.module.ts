import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../loader/loader.module';
import { UserModule } from '../user/user.module';
import { UsersListComponent } from './users-list.component';

const module = [
  LoaderModule,
  UserModule,
]
@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    ...module,
    CommonModule,
    RouterModule
  ],
  exports: [
    UsersListComponent
  ]
})

export class UsersListModule { }
