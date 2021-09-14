import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/_utils/interfaces/IPost';
import * as fromStore from 'src/app/_utils/store';

@Component({
  selector: 'dicf-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsListComponent implements OnInit {

  loading$: Observable<boolean>
  posts$: Observable<IPost[]>;
  postsCount$: Observable<number>;
  usersCount$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(fromStore.getLoadingPosts);
    this.posts$ = this.store.select(fromStore.getPosts);
    this.postsCount$ = this.store.select(fromStore.getPostsNumber);
    this.usersCount$ = this.store.select(fromStore.getPostsUniqueUsers);
  }
}
