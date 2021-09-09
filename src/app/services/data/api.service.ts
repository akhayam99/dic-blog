import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ApiParams = { [key: string]: any };

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService<T> {
  abstract getList$(params?: ApiParams): Observable<T[]>;
  abstract getItem$(id: number): Observable<T>;
  abstract deleteItem$(id: any): Observable<void>;
  abstract save$(item: any): Observable<T>;
}
