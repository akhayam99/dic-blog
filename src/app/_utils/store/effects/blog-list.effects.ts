import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { of } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { PostService } from "src/app/_utils/services/data/post.service";
import { UserService } from "src/app/_utils/services/data/user.service";
import * as fromActions from "../actions";

@Injectable()
export class BlogListEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private userService: UserService,
    private router: Router,
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
    map(({id}) => {
      this.router.navigate([`/posts/${id}`])
    }),
  ), { dispatch: false });

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadPosts),
    switchMap(() => {
      return this.postService.getList$().pipe(
        map(posts => fromActions.LoadPostsSuccess({ posts })),
        catchError(error => of(fromActions.LoadPostFailed(error)))
      )
    })
  ));

  loadPostsFromUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadPostsFromUser),
    switchMap(() => {
      return this.postService.getList$().pipe(
        map(posts => fromActions.LoadPostsFromUserSuccess({ posts })),
        catchError(error => of(fromActions.LoadPostsFromUserFailed(error)))
      )
    })
  ));

  LoadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadUsers),
    switchMap(() => {
      return this.userService.getList$().pipe(
        map(users => fromActions.LoadUsersSuccess({ users })),
        catchError(error => of(fromActions.LoadUsersFailed(error)))
      )
    })
  ));
}
