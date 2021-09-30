
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType, rootEffectsInit } from "@ngrx/effects";
import { ROUTER_NAVIGATED } from "@ngrx/router-store";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { InfoService, VersionError } from "../../services/api/info.service";
import { LoadActiveURL, LoadVersionFailed, LoadVersionSuccess } from "../actions";


@Injectable()
export class BlogInfoEffects {
  constructor(
    private actions$: Actions,
    private infoService: InfoService,
    private router: Router,
  ) { }

  LoadActiveURL$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATED),
    map(() => {
      return LoadActiveURL({ activeURL: this.router.url });
    }),
  ));

  LoadVersion$ = createEffect(() => this.actions$.pipe(
    ofType(rootEffectsInit),
    switchMap(() => {
      return this.infoService.version$().pipe(
        map((resp: string) => {
          return LoadVersionSuccess({ version: resp })
        }),
        catchError((err: VersionError) => of(LoadVersionFailed(err)))
      )
    }),
  ));

}
