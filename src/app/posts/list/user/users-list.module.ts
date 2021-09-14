import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModule } from '../../_utils/loader/loader.module';
import { UserModule } from '../../_utils/user/user.module';
import { UsersListComponent } from './users-list.component';

const module = [
  LoaderModule,
  RouterModule,
  UserModule,
]
@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    UsersListComponent
  ]
})

export class UsersListModule { }
