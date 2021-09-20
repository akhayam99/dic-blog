import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/_utils/store';


@Component({
  selector: 'dicf-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['../auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegistrationPageComponent {
  constructor(private store: Store) { }

  goToLogin(): void {
    this.store.dispatch(fromStore.GoToAuthLogin());
  }

  goToRegistration(): void {
    this.store.dispatch(fromStore.GoToAuthRegistration());
  }
}
