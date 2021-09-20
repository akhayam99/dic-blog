import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/_utils/store';

@Component({
  selector: 'dicf-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent  {
  constructor(private store: Store) { }

  goToLogin(): void {
    this.store.dispatch(fromStore.GoToAuthLogin());
  }

  goToRegistration(): void {
    console.log("pippo");
    this.store.dispatch(fromStore.GoToAuthRegistration());
  }
}
