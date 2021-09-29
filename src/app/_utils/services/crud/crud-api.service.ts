import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiService } from '../api/api.service';

export type ApiParams = { [key: string]: any };

@Injectable({
  providedIn: 'root'
})
export abstract class CrudApiService<T> {

  abstract endpoint: string;
  baseUrl: string;

  constructor(protected apiService: ApiService) {
    this.baseUrl = environment.backendUrl;
  }

  getList$(params?: ApiParams): Observable<T[]> {
    return this.apiService.getAuthenticatedCall$<T[]>({
      method: 'get',
      url: this.baseUrl + this.endpoint
    })
  }

  getItem$(id: number): Observable<T> {
    return this.apiService.getAuthenticatedCall$<T>({
      method: 'get',
      url: this.baseUrl + this.endpoint + '/' + id
    })
  }

  deleteItem$(id: any): Observable<void> {
    return this.apiService.getAuthenticatedCall$<void>({
      method: 'delete',
      url: this.baseUrl + this.endpoint + '/' + id
    })
  }

  save$(item: any): Observable<T> {
    if (item.id)
      return this.apiService.getAuthenticatedCall$<T>({
        method: 'put',
        url: this.baseUrl + this.endpoint + '/' + item.id,
        data: item
      })

    return this.apiService.getAuthenticatedCall$<T>({
      method: 'post',
      url: this.baseUrl + this.endpoint,
      data: item
    })
  }

}
