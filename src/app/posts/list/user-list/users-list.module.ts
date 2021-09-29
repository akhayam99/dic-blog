import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModule } from 'src/app/_utils/components/loader/loader.module';
import { UserModule } from 'src/app/_utils/components/user/user.module';
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
