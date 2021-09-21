import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dicf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {
  @Input() loading: boolean = false;
  @Input() text: string = '';
  @Input() type: string = 'button';
}
