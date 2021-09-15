import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComment } from 'src/app/_utils/interfaces/IComment';

@Component({
  selector: 'dicf-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentListComponent {
  @Input() comments: IComment[];
}
