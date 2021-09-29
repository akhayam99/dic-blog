import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/_utils/interfaces/IUser';
import { getUserData, LoadPostsFromUser, LoadUsersWithFilter, NavToNewPost, UnsetPostsFromUser } from 'src/app/_utils/store';

@Component({
  selector: 'dicf-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {

  searchInput = "";
  activeUser$: Observable<IUser>

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.activeUser$ = this.store.select(getUserData)
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

  goToNewPost(): void {
    this.store.dispatch(NavToNewPost())
  }
}
