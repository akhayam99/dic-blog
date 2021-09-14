import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPost } from 'src/app/_utils/interfaces/IPost';

@Component({
  selector: 'dicf-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent {

  @Input() post: IPost;
  @Input() summary: boolean;
  @Input() comments: boolean = true;
}
