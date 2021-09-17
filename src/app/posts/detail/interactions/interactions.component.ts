import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IUser } from 'src/app/_utils/interfaces/IUser';

@Component({
  selector: 'dicf-interactions',
  templateUrl: './interactions.component.html',
  styleUrls: ['./interactions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InteractionsComponent {
  @Input() interactions: IUser[];
}
