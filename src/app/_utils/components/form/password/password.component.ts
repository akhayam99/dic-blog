import { ChangeDetectionStrategy, Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseComponent } from '../_base/base.component';

@Component({
  selector: 'dicf-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PasswordComponent),
    multi: true
  }]
})
export class PasswordComponent extends BaseComponent {

  type: 'text' | 'password' = 'password';

  changeType(): void {
    this.type = this.type === 'password' ? 'text' : 'password'
  }
}
