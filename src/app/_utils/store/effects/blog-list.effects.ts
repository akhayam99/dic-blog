import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { getUser, LoadPostFailed, LoadPosts, LoadPostsFromUser, LoadPostsSuccess, UnsetPostsFromUser } from "..";
import { PostService } from "../../services/crud/post.service";

@Injectable()
export class BlogListEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private router: Router,
    private store: Store,
  ) { }

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(LoadPosts),
    withLatestFrom(this.store.select(getUser)),
    switchMap(([action, user]) => {
      let params = user ? { user_id: user.id } : null;
      return this.postService.getList$(params).pipe(
        map(posts => LoadPostsSuccess({ posts })),
        catchError(error => of(LoadPostFailed(error)))
      )
    })
  ));

  LoadPostFromUser$ = createEffect(() => this.actions$.pipe(
    ofType(LoadPostsFromUser, UnsetPostsFromUser),
    map(() => {
      return LoadPosts();
    })
  ));

}
