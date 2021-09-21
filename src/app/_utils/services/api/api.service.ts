import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  get$<T>(url: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(url, { params });
  }

  post$<T>(url: string, data: any, params?: HttpParams): Observable<T> {
    return this.httpClient.post<T>(url, data, { params });
  }

  put$<T>(url: string, data: any, params?: HttpParams): Observable<T> {
    return this.httpClient.put<T>(url, data, { params });
  }

  delete$<T>(url: string, params?: HttpParams): Observable<T> {
    return this.httpClient.delete<T>(url, { params });
  }

}
