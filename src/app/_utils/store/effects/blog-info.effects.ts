
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { InfoService, VersionError } from "../../services/api/info.service";
import * as fromActions from "../actions";

@Injectable()
export class BlogInfoEffects {
  constructor(
    private actions$: Actions,
    private infoService: InfoService,
  ) { }

  LoadVersion$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoginSuccess),
    switchMap(() => {
      return this.infoService.version$().pipe(
        map((resp: string) => {
          return fromActions.LoadVersionSuccess({version: resp})
        }),
        catchError((err: VersionError) => of(fromActions.LoadVersionFailed(err)))
      )
    }),
  ))
}

