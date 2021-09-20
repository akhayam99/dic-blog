
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs/operators";
import * as fromActions from "../actions";

@Injectable()
export class BlogAuthEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
  ) { }


  GoToAuthLogin$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.GoToAuthLogin),
    map(() => {
      this.router.navigate([`login`]);
    }),
  ), { dispatch: false });

  GoToAuthRegistration$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.GoToAuthRegistration),
    map(() => {
      this.router.navigate([`/registration`]);
    }),
  ), { dispatch: false });
}


