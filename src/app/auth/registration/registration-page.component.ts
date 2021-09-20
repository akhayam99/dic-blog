import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthComponent } from '../auth.component';

@Component({
  selector: 'dicf-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['../auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RegistrationPageComponent extends AuthComponent { }
