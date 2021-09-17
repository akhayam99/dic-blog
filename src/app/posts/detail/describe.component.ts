import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/_utils/interfaces/IComment';
import { IPost } from 'src/app/_utils/interfaces/IPost';
import { IUser } from 'src/app/_utils/interfaces/IUser';
import * as fromStore from 'src/app/_utils/store';

@Component({
  selector: 'dicf-describe',
  templateUrl: './describe.component.html',
  styleUrls: ['./describe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescribeComponent implements OnInit {

  loading$: Observable<boolean>;
  post$: Observable<IPost>;
  comments$: Observable<IComment[]>;
  interactions$: Observable<IUser[]>;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(fromStore.getLoadingPost);
    this.post$ = this.store.select(fromStore.getPost);

    this.comments$ = this.store.select(fromStore.getComments);

    this.interactions$ = this.store.select(fromStore.getInteractions)
  }
}
