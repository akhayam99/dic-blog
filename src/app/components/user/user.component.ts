import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'dicf-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class UserComponent implements OnInit {

  @Input() userAvatar: string;
  @Input() userMail: string;
  @Input() userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
