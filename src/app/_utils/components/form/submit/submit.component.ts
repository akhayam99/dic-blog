import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dicf-submit[text]',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitComponent {
  @Input() loading: boolean;
  @Input() text: string;
 }
