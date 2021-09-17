import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, filter, map, switchMap, withLatestFrom } from "rxjs/operators";
import { PostService } from "src/app/_utils/services/data/post.service";
import { getUser } from "..";
import * as fromActions from "../actions";

@Injectable()
export class BlogListEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private router: Router,
    private store: Store,
  ) { }

  navigationList1$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((routerInfo: RouterNavigationAction) => {
      return routerInfo.payload.routerState.url === '/posts'
    }),
    map(() => { return fromActions.LoadPosts() })
  ));

  navigationList2$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((routerInfo: RouterNavigationAction) => {
      return routerInfo.payload.routerState.url === '/posts'
    }),
    map(() => { return fromActions.LoadUsers() })
  ));

  goToPost$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.GoToPostDetail),
    map(({ id }) => {
      this.router.navigate([`/posts/${id}`])
    }),
  ), { dispatch: false });

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadPosts),
    withLatestFrom(this.store.select(getUser)),
    switchMap(([action, user]) => {
      let params = user ? { user_id: user.id } : null;
      return this.postService.getList$(params).pipe(
        map(posts => fromActions.LoadPostsSuccess({ posts })),
        catchError(error => of(fromActions.LoadPostFailed(error)))
      )
    })
  ));

  LoadPostFromUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadPostsFromUser, fromActions.UnsetPostsFromUser),
    map(() => {
      return fromActions.LoadPosts();
    })
  ));

}
