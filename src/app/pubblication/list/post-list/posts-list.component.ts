import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/_utils/interfaces/IPost';
import { getLoadingPosts, getPosts, getPostsNumber, getPostsUniqueUsers, NavToPostDetail } from 'src/app/_utils/store';

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
    this.loading$ = this.store.select(getLoadingPosts);
    this.posts$ = this.store.select(getPosts);
    this.postsCount$ = this.store.select(getPostsNumber);
    this.usersCount$ = this.store.select(getPostsUniqueUsers);
  }

  goToPost(id: number): void {
    this.store.dispatch(NavToPostDetail({ id }));
  }
}
