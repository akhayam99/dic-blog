import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BaseComponent } from '../_base/base.component';

@Component({
  selector: 'dicf-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent extends BaseComponent {
  @Input() rows: number = 5;
}
