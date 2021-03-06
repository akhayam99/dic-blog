import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from '../../../_utils/interfaces/IUser';
import * as fromStore from '../../../_utils/store';


@Component({
  selector: 'dicf-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  active_user$: Observable<IUser>;
  loading$: Observable<boolean>;
  users$: Observable<IUser[]>;
  @Output() onUserClick = new EventEmitter<IUser>();
  @Output() onUserRemove = new EventEmitter();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.users$ = this.store.select(fromStore.getUsers);
    this.loading$ = this.store.select(fromStore.getLoadingUsers);
    this.active_user$ = this.store.select(fromStore.getUser);
  }

  userClicked(user: IUser, activeUser: IUser): void {
    if (activeUser && activeUser.id === user?.id)
      this.onUserRemove.emit();
    else
      this.onUserClick.emit(user);
  }

}
