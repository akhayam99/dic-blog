import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IPost } from 'src/app/_utils/interfaces/IPost';
import { DeletePost } from '../../store';
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
  @Input() canEdit: boolean = false;

  constructor(private store: Store) { }

  deletePost() {
    this.store.dispatch(DeletePost({post_id: this.post.id}))
  }

  editPost() {
    console.log("edit post");
  }
}
