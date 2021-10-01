import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/_utils/interfaces/IUser';
import { getPostsNumber, getPostsUniqueUsers, getUserData, LoadPostsFromUser, LoadUsersWithFilter, NavToAuthLogin, NavToNewPost, UnsetPostsFromUser } from 'src/app/_utils/store';

@Component({
  selector: 'dicf-pubblication-list',
  templateUrl: './pubblication-list.component.html',
  styleUrls: ['./pubblication-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PubblicationListComponent implements OnInit {

  searchInput = "";
  activeUser$: Observable<IUser>
  postsCount$: Observable<number>;
  usersCount$: Observable<number>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.activeUser$ = this.store.select(getUserData);
    this.postsCount$ = this.store.select(getPostsNumber);
    this.usersCount$ = this.store.select(getPostsUniqueUsers);
  }

  onUserClick(user: IUser): void {
    this.store.dispatch(LoadPostsFromUser({ user }));
  }

  onUserRemove(): void {
    this.store.dispatch(UnsetPostsFromUser());
  }

  onSearch(filter: string): void {
    this.store.dispatch(LoadUsersWithFilter({ filter }))
  }

  createPost(): void {
    this.store.dispatch(NavToNewPost())
  }

  login(): void {
    this.store.dispatch(NavToAuthLogin());
  }
}
