import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/IComment';

@Component({
  selector: 'dicf-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() comment: IComment;
}
