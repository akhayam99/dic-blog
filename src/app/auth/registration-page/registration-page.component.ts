import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from 'src/app/_utils/store';


@Component({
  selector: 'dicf-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationPageComponent {
  constructor(private store: Store) { }

  goToLogin(): void {
    console.log("gotologin")
    this.store.dispatch(fromStore.GoToAuthLogin());
  }
}
