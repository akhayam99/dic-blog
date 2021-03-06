import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { NavToAuthLogin } from 'src/app/_utils/store';

@Component({
  selector: 'dicf-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['../auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegistrationPageComponent {
  constructor(private store: Store) { }

  goToLogin(): void {
    this.store.dispatch(NavToAuthLogin());
  }

}
