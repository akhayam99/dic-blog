import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/IComment';

@Component({
  selector: 'dicf-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentComponent {

  @Input() comment: IComment;
}
