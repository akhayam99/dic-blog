import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'dicf-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent { }
