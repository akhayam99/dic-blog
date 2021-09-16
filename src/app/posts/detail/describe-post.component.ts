import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/_utils/interfaces/IComment';
import { IPost } from 'src/app/_utils/interfaces/IPost';
import * as fromStore from 'src/app/_utils/store';

@Component({
  selector: 'dicf-describe-post',
  templateUrl: './describe-post.component.html',
  styleUrls: ['./describe-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescribePostComponent implements OnInit {

  loading$: Observable<boolean>;
  post$: Observable<IPost>;
  comments$: Observable<IComment[]>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(fromStore.getLoadingPost);
    this.post$ = this.store.select(fromStore.getPost);
    this.comments$ = this.store.select(fromStore.getComments);
  }
}
