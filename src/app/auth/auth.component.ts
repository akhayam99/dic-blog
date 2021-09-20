import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/_utils/store';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthComponent  {

  constructor(private store: Store) { }

  goToLogin(): void {
    this.store.dispatch(fromStore.GoToAuthLogin());
  }

  goToRegistration(): void {
    this.store.dispatch(fromStore.GoToAuthRegistration());
  }

}
