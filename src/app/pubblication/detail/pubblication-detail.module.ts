import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoaderModule } from 'src/app/_utils/components/loader/loader.module';
import { PostModule } from 'src/app/_utils/components/post/post.module';
import { CommentsModule } from './comments/comments.module';
import { InteractionsModule } from './interactions/interactions.module';
import { PubblicationDetailComponent } from './pubblication-detail.component';

const module = [
  CommentsModule,
  LoaderModule,
  InteractionsModule,
  PostModule,
  RouterModule.forChild([{ path: '', component: PubblicationDetailComponent }]),
]

@NgModule({
  declarations: [
    PubblicationDetailComponent
  ],
  imports: [
    ...module,
    CommonModule,
  ],
  exports: [
    PubblicationDetailComponent
  ]
})
export class PubblicationDetail { }
