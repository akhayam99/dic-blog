import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseComponent } from '../_base/base.component';

@Component({
  selector: 'dicf-submit[value]',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitComponent extends BaseComponent { }
