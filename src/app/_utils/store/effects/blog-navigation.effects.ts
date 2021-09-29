
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { filter, map } from "rxjs/operators";
import { LoadPost, LoadPosts, LoadUsers, LoginSuccess, NavToAuthLogin, NavToAuthRegistration, NavToNewPost, NavToPostDetail } from "..";


@Injectable()
export class BlogNavigationEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
  ) { }


  NavWhenEmpty$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((routerInfo: RouterNavigationAction) => {
      return routerInfo.payload.routerState.url === '/'
    }),
    map(() => { this.router.navigate([`login`]); })
  ), { dispatch: false });

  NavToAuthLogin$ = createEffect(() => this.actions$.pipe(
    ofType(NavToAuthLogin),
    map(() => {
      this.router.navigate([`login`]);
    }),
  ), { dispatch: false });

  NavToAuthRegistration$ = createEffect(() => this.actions$.pipe(
    ofType(NavToAuthRegistration),
    map(() => {
      this.router.navigate([`registration`]);
    }),
  ), { dispatch: false });

  NavToPosts$ = createEffect(() => this.actions$.pipe(
    ofType(LoginSuccess),
    map(() => {
      this.router.navigate([`posts`]);
    }),
  ), { dispatch: false });

  NavToPostsEffect1$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((routerInfo: RouterNavigationAction) => {
      return routerInfo.payload.routerState.url === '/posts'
    }),
    map(() => { return LoadPosts() })
  ));

  NavToPostsEffect2$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((routerInfo: RouterNavigationAction) => {
      return routerInfo.payload.routerState.url === '/posts'
    }),
    map(() => { return LoadUsers() })
  ));

  NavToPostDetail$ = createEffect(() => this.actions$.pipe(
    ofType(NavToPostDetail),
    map(({ id }) => {
      this.router.navigate([`/posts/${id}`])
    }),
  ), { dispatch: false });

  NavToPostDetailEffect1$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((routerInfo: RouterNavigationAction) => {
      return routerInfo.payload.routerState.url.match(/\/posts\/[\d]+$/) ? true : false;
    }),
    map((routerInfo: RouterNavigationAction) => {
      return LoadPost({ post_id: +routerInfo.payload.routerState.url.match(/[\d]+$/)[0] })
    })
  ));

  NavToNewPost$ = createEffect(() => this.actions$.pipe(
    ofType(NavToNewPost),
    map(() => {
      this.router.navigate([`/posts/create`])
    }),
  ), { dispatch: false });

}


