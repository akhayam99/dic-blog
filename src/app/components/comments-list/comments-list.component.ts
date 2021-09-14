import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IComment } from 'src/app/interfaces/IComment';

@Component({
  selector: 'dicf-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsListComponent {
  @Input() comments: IComment[];
}
