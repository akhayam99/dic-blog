import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavToAuthLogin, NavToAuthRegistration } from '../_utils/store';

@Component({
  selector: 'dicf-auth[page]',
  templateUrl: './auth.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {
  @Input() page: 'login' | 'registration';

  constructor(private store: Store) { }

  changeAuthPage(): void {
    if (this.page === 'login')
      return this.store.dispatch(NavToAuthRegistration());
    return this.store.dispatch(NavToAuthLogin());
  }
}
