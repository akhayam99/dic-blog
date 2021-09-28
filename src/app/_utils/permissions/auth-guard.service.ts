import { Injectable } from '@angular/core';
import { CanActivate, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { getIsLogged, NavToAuthLogin } from '../store';


@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

  constructor(private store: Store) { }

  canActivate(
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.store.select(getIsLogged).pipe(
      map(isLogged => {
        if (isLogged)
          return true

        this.store.dispatch(NavToAuthLogin());
        return false;
      })
    );
  }

}
