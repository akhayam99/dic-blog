
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { Login, LoginFailed, LoginSuccess, Logout, LogoutFailed, LogoutSuccess, UserDataLoadFailed, UserDataLoadSuccess } from "..";
import { LoginError, LoginResponse, LoginService } from "../../services/auth/login.service";

@Injectable()
export class BlogAuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private loginService: LoginService,
  ) { }

  Login$ = createEffect(() => this.actions$.pipe(
    ofType(Login),
    switchMap(({ email, password }) => {
      return this.loginService.login$({ email, password }).pipe(
        map((resp: LoginResponse) => LoginSuccess(resp)),
        catchError((error: { error: LoginError }) => of(LoginFailed(error.error)))
      )
    }),
  ));

  Logout$ = createEffect(() => this.actions$.pipe(
    ofType(Logout),
    map(() => { this.router.navigate([`login`]); })
  ), { dispatch: false });

  Logout2$ = createEffect(() => this.actions$.pipe(
    ofType(Logout),
    switchMap(() => {
      return this.loginService.logout$().pipe(
        map((resp: string) => LogoutSuccess(resp)),
        catchError((error: any) => of(LogoutFailed(error)))
      )
    }),
  ));

  Me$ = createEffect(() => this.actions$.pipe(
    ofType(LoginSuccess),
    switchMap(() => {
      return this.loginService.me$().pipe(
        map((resp: any) => UserDataLoadSuccess(resp)),
        catchError((error: { error: LoginError }) => of(UserDataLoadFailed(error.error)))
      )
    }),
  ));

}


