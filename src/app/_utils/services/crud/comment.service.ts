import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../../interfaces/IComment';
import { ApiService } from '../api/api.service';
import { ApiParams, CrudApiService } from './crud-api.service';

@Injectable({
  providedIn: 'root'
})

export class CommentService extends CrudApiService<IComment> {
  endpoint = 'comments';

  constructor(private service: ApiService) {
    super(service);
  }

  getList$(params?: ApiParams): Observable<IComment[]> {
    return this.service.getAuthenticatedCall$<IComment[]>({ method: 'get', url: `${this.baseUrl}posts/${params.post_id}/${this.endpoint}` })
    // if (params?.post_id) {
    //   return this.service.getAuthenticatedCall$<any>({ method: 'get', url: `${this.baseUrl}posts/${params.post_id}/${this.endpoint}` })
    // }

    // return this.service.getAuthenticatedCall$<any>({ method: 'get', url: this.baseUrl + this.endpoint })
  }
}
