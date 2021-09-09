import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'dicf-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {

  @HostBinding('class') classes = 'fa fa-spinner fa-spin';
  @HostBinding('class.fa-5x') @Input() big: boolean;
  @HostBinding('class.fa-green') @Input() green: boolean;

}
