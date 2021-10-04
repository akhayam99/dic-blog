import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLogoutLoader, Logout, NavToAuthLogin, NavToAuthRegistration } from 'src/app/_utils/store';
import { IUser } from '../../../_utils/interfaces/IUser';

@Component({
  selector: 'dicf-auth[page]',
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  @Input() page: 'login' | 'registration' | 'anonymous' | 'logged';
  @Input() user: IUser;

  logoutLoader$: Observable<boolean>;
  footer: string = '';
  title: string = '';

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.title = this.getTitle();
    this.footer = this.getFooter();
    this.logoutLoader$ = this.store.select(getLogoutLoader);
  }

  getTitle(): string {
    switch (this.page) {
      case 'anonymous':
        return 'ANONIMO';
      case 'logged':
        return 'BENVENUTO :)';
      case 'login':
        return 'ACCEDI';
      case 'registration':
        return 'REGISTRATI';
      default:
        return 'MATTEO FLORA MI HA BUCATO'
    }
  }

  getFooter(): string {
    switch (this.page) {
      case 'logged':
        return 'Logout';
      case 'login':
        return 'Clicca qui per registrarti';
      case 'registration':
      case 'anonymous':
        return 'Clicca qui per loggarti';
      default:
        return 'MATTEO FLORA MI HA BUCATO... DI NUOVOOOOOOOOOOOO'
    }
  }

  changeRoutingPage(): void {
    switch (this.page) {
      case 'logged':
        return this.store.dispatch(Logout());
      case 'login':
        return this.store.dispatch(NavToAuthRegistration());
      case 'anonymous':
      case 'registration':
      default:
        return this.store.dispatch(NavToAuthLogin());
    }
  }
}
