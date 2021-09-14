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

  loading$: Observable<boolean>;
  users$: Observable<IUser[]>;
  @Output() onUserClick = new EventEmitter<IUser>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.users$ = this.store.select(fromStore.getUsers);
    this.loading$ = this.store.select(fromStore.getLoadingUsers);
  }

  userClicked(user: IUser): void {
    this.onUserClick.emit(user)
  }

}
