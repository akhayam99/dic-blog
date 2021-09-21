
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { UserService } from "../../services/data/user.service";
import * as fromActions from "../actions";

@Injectable()
export class BlogUsersEffects {
  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }


  LoadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadUsers),
    switchMap(() => {
      return this.userService.getList$().pipe(
        map(users => fromActions.LoadUsersSuccess({ users })),
        catchError(error => of(fromActions.LoadUsersFailed(error)))
      )
    })
  ));

  LoadUsersWithFilter$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadUsersWithFilter),
    switchMap(({ filter }) => {
      return this.userService.getList$({ filter }).pipe(
        map(users => fromActions.LoadUsersSuccess({ users })),
        catchError(error => of(fromActions.LoadUsersFailed(error)))
      )
    }),
  ));

}


