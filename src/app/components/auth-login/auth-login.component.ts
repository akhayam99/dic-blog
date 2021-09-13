import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dicf-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthLoginComponent {
  username: string;
  password: string;
  showPassword: boolean = false;
}
