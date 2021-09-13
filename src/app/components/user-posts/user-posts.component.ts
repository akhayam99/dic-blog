import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'dicf-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
