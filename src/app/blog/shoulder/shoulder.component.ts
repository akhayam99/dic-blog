import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/_utils/interfaces/IUser';
import { VersionResponse } from 'src/app/_utils/services/api/info.service';
import { getActiveURL, getUserData, getVersion, Logout, NavToAuthLogin } from 'src/app/_utils/store';

@Component({
  selector: 'dicf-shoulder',
  templateUrl: './shoulder.component.html',
  styleUrls: ['./shoulder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoulderComponent implements OnInit {

  activeUser$: Observable<IUser>;
  activeURL$: Observable<string>;
  version$: Observable<VersionResponse>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.activeUser$ = this.store.select(getUserData);
    this.activeURL$ = this.store.select(getActiveURL);
    this.version$ = this.store.select(getVersion);
  }

  login(): void {
    this.store.dispatch(NavToAuthLogin());
  }

  logout(): void {
    this.store.dispatch(Logout());
  }

}
