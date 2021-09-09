import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/IUser';
import { BlogService } from 'src/app/services/controller/blog.service';

@Component({
  selector: 'dicf-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersListComponent implements OnInit {

  users$: Observable<IUser[]>;

  @Output() onUserClick = new EventEmitter<IUser>();

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.users$ = this.blogService.users$;
  }

  userClicked(user: IUser): void {
    this.onUserClick.emit(user)
  }

}
