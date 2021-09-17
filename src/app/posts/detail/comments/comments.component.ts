import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComment } from 'src/app/_utils/interfaces/IComment';

@Component({
  selector: 'dicf-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent {
  @Input() comments: IComment[];
}
