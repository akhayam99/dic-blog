import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/_utils/interfaces/IUser';
import { LoadPostsFromUser, LoadUsersWithFilter, UnsetPostsFromUser } from 'src/app/_utils/store';

@Component({
  selector: 'dicf-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  searchInput = "";
  activeUser$: Observable<IUser>

  constructor(private store: Store) { }

  onUserClick(user: IUser): void {
    this.store.dispatch(LoadPostsFromUser({ user }));
  }

  onUserRemove(): void {
    this.store.dispatch(UnsetPostsFromUser());
  }

  onSearchChange(value: string): void {
    this.store.dispatch(LoadUsersWithFilter({filtro: value}))
  }
}
