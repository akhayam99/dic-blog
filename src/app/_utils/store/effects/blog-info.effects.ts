
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { InfoService } from "../../services/api/info.service";
import * as fromActions from "../actions";

@Injectable()
export class BlogInfoEffects {
  constructor(
    private actions$: Actions,
    private infoService: InfoService,
  ) { }

  LoadVersion$ = createEffect(() => this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    switchMap(() => {
      return this.infoService.version$().pipe(
        map(version => fromActions.LoadVersionSuccess({ version })),
        catchError((error) => of(fromActions.LoadVersionFailed(error)))
      )
    }),
  ));
}

