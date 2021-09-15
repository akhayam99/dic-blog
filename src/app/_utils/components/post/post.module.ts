import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PipesModule } from 'src/app/_utils/pipes/pipes.module';
import { UserModule } from '../user/user.module';
import { PostComponent } from './post.component';

const module = [
  PipesModule,
  UserModule,
];

@NgModule({
  declarations: [
    PostComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    PostComponent
  ]
})

export class PostModule { }
