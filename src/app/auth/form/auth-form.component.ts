import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dicf-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthFormComponent {
  authType: 'login' | 'registration' = 'login';

  changeAuthForm() {
    this.authType = this.authType === 'login' ? 'registration' : 'login';
  }
}
