import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoaderModule } from '../loader/loader.module';
import { UserModule } from '../user/user.module';
import { UsersListComponent } from './users-list.component';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    LoaderModule,
    UserModule,
  ],
  exports: [
    UsersListComponent
  ]
})

export class UsersListModule { }
