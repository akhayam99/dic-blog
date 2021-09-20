import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthComponent } from '../auth.component';

@Component({
  selector: 'dicf-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['../auth.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginPageComponent extends AuthComponent { }
