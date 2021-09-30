import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavToAuthLogin, NavToAuthRegistration } from '../_utils/store';

@Component({
  selector: 'dicf-auth[page]',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  @Input() page: 'login' | 'registration';

  constructor(private store: Store) { }

  goToLogin(): void {
    this.store.dispatch(NavToAuthLogin());
  }

  goToRegistration(): void {
    this.store.dispatch(NavToAuthRegistration());
  }
}
