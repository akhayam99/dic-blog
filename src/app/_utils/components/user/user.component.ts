import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dicf-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserComponent {
  @Input() userAvatar: string;
  @Input() userMail: string;
  @Input() userName: string;
}
