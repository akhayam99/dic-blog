import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from './_utils/interfaces/IUser';
import { VersionResponse } from './_utils/services/api/info.service';
import { getActiveURL, getShowLogin, getUserData, getVersion } from './_utils/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  activeURL$: Observable<string>;
  showLogin$: Observable<boolean>;
  user$: Observable<IUser>;
  version$: Observable<VersionResponse>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.activeURL$ = this.store.select(getActiveURL);
    this.showLogin$ = this.store.select(getShowLogin);
    this.user$ = this.store.select(getUserData);
    this.version$ = this.store.select(getVersion);
  }

}
