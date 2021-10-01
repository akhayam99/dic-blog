import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/_utils/interfaces/IComment';
import { IPost } from 'src/app/_utils/interfaces/IPost';
import { IUser } from 'src/app/_utils/interfaces/IUser';
import * as fromStore from 'src/app/_utils/store';
import { NavToPosts } from 'src/app/_utils/store';

@Component({
  selector: 'dicf-pubblication-detail',
  templateUrl: './pubblication-detail.component.html',
  styleUrls: ['./pubblication-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PubblicationDetailComponent implements OnInit {

  activeUser$: Observable<IUser>;
  loading$: Observable<boolean>;
  post$: Observable<IPost>;
  comments$: Observable<IComment[]>;
  interactions$: Observable<IUser[]>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.activeUser$ = this.store.select(fromStore.getUserData);
    this.comments$ = this.store.select(fromStore.getComments);
    this.interactions$ = this.store.select(fromStore.getInteractions);
    this.loading$ = this.store.select(fromStore.getLoadingPost);
    this.post$ = this.store.select(fromStore.getPost);
  }

  goToPosts(): void {
    this.store.dispatch(NavToPosts());
  }
}
