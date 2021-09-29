import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dicf-hide-block',
  templateUrl: './hide-block.component.html',
  styleUrls: ['./hide-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HideBlockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
