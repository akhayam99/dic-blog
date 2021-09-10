import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from '../../interfaces/IUser';
import * as fromStore from '../../store';


@Component({
  selector: 'dicf-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  users$: Observable<IUser[]>;

  @Output() onUserClick = new EventEmitter<IUser>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.users$ = this.store.select(fromStore.getUsers);
  }

  userClicked(user: IUser): void {
    this.onUserClick.emit(user)
  }

}
