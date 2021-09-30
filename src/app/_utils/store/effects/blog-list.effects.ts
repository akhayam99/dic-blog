import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { getUserData, LoadPostFailed, LoadPosts, LoadPostsAfterNavigation, LoadPostsFromUser, LoadPostsSuccess, UnsetPostsFromUser } from "..";
import { PostService } from "../../services/crud/post.service";

@Injectable()
export class BlogListEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private store: Store,
  ) { }

  LoadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(LoadPosts),
    withLatestFrom(this.store.select(getUserData)),
    switchMap(([action, user]) => {
      return this.postService.getList$().pipe(
        map(posts => LoadPostsSuccess({ posts })),
        catchError(error => of(LoadPostFailed(error)))
      )
    })
  ));

  LoadPostsAfterNavigation$ = createEffect(() => this.actions$.pipe(
    ofType(LoadPostsAfterNavigation),
    withLatestFrom(this.store.select(getUserData)),
    switchMap(([action, user]) => {
      return this.postService.getList$().pipe(
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
