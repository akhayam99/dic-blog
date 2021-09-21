
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { of } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import { LoginError, LoginResponse, LoginService } from "../../services/auth/login.service";
import * as fromActions from "../actions";

@Injectable()
export class BlogAuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private loginService: LoginService,
  ) { }

  Navigation1$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((routerInfo: RouterNavigationAction) => {
      return routerInfo.payload.routerState.url === '/'
    }),
    map(() => { this.router.navigate([`login`]); })
  ), { dispatch: false });

  Login$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.Login),
    switchMap(({ email, password }) => {
      return this.loginService.login$({ email, password }).pipe(
        map((resp: LoginResponse) => fromActions.LoginSuccess(resp)),
        catchError((error: {error: LoginError}) => of(fromActions.LoginFailed(error.error)))
      )
    }),
  ));

  LoginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoginSuccess),
    map(() => {
      this.router.navigate([`posts`]);
    }),
  ), { dispatch: false });

  GoToAuthLogin$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.GoToAuthLogin),
    map(() => {
      this.router.navigate([`login`]);
    }),
  ), { dispatch: false });

  GoToAuthRegistration$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.GoToAuthRegistration),
    map(() => {
      this.router.navigate([`registration`]);
    }),
  ), { dispatch: false });
}


