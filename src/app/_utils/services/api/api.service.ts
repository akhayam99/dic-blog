import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import * as fromStore from '../../store';

export type URLMethod = 'get' | 'post' | 'put' | 'delete';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, private store: Store) { }

  getCall$<T>(parameters: { method: URLMethod, url: string, options?: any, data?: any }): Observable<any> {
    const { method, url, options, data } = parameters;
    switch (method) {
      case 'get':
        return this.httpClient.get<T>(url, options);
      case 'post':
        return this.httpClient.post<T>(url, data, options);
      case 'put':
        return this.httpClient.put<T>(url, data, options);
      case 'delete':
        return this.httpClient.delete<T>(url, options);
    }
  }

  getAuthenticatedCall$<T>(parameters: { method: URLMethod, url: string, options?: any, data?: any }): Observable<T> {
    return this.store.select(fromStore.getLoginInfo).pipe(
      switchMap(loginInfo => {
        const { access_token } = loginInfo;
        const options = {
          headers: this.getRequestHeaders(access_token),
          params: new HttpParams(),
          ...parameters.options,
          responseType: 'json',
        }
        return this.getCall$<T>({ ...parameters, options });
      })
    )
  }

  getRequestHeaders = (token): HttpHeaders => {
    return new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${token}` || '')
  }

}
