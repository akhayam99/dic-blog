import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dicf-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescriptionComponent { }
