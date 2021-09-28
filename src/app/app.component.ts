import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IUser } from './_utils/interfaces/IUser';
import { VersionResponse } from './_utils/services/api/info.service';
import * as fromStore from './_utils/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  user$: Observable<IUser>;
  version$: Observable<VersionResponse>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.user$ = this.store.select(fromStore.getUserData)
    this.version$ = this.store.select(fromStore.getVersion)
  }

  Logout(): void {
    this.store.dispatch(fromStore.Logout());
  }

}
