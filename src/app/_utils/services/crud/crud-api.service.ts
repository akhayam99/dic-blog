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

  constructor(private apiService: ApiService) {
    this.baseUrl = environment.backendUrl;
  }

  getList$(params?: ApiParams): Observable<T[]> {
    return this.apiService.get$<T[]>(this.baseUrl + this.endpoint);
  }

  getItem$(id: number): Observable<T> {
    return this.apiService.get$<T>(this.baseUrl + this.endpoint + '/' + id);
  }

  deleteItem$(id: any): Observable<void> {
    return this.apiService.delete$<void>(this.baseUrl + this.endpoint + '/' + id);
  }

  save$(item: any): Observable<T> {
    if (item.id)
      return this.apiService.put$<T>(this.baseUrl + this.endpoint + '/' + item.id, item);
    return this.apiService.post$<T>(this.baseUrl + this.endpoint, item);
  }

}
