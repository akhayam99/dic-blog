import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { IPost } from 'src/app/interfaces/IPost';

@Component({
  selector: 'dicf-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

  @Input() post: IPost;
  @Input() summary: boolean;
}
