import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../../interfaces/IPost';
import { ApiParams, CrudApiService } from './crud-api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends CrudApiService<IPost> {
  endpoint = 'posts';

  getList$(params?: ApiParams): Observable<IPost[]> {
    return this.apiService.getCall$<IPost[]>({
      method: 'get',
      url: this.baseUrl + this.endpoint
    })
  }

  getItem$(id: number): Observable<IPost> {
    return this.apiService.getCall$<IPost>({
      method: 'get',
      url: this.baseUrl + this.endpoint + '/' + id
    })
  }
}
