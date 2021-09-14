import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dicf-errors[errors]',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorsComponent {

  @Input() errors: { [key: string]: any };

}
