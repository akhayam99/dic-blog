import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../../interfaces/IComment';
import { ApiParams, CrudApiService } from './crud-api.service';

@Injectable({
  providedIn: 'root'
})

export class CommentService extends CrudApiService<IComment> {
  endpoint = 'comments';

  getComments$(post_id: number, params?: ApiParams): Observable<IComment[]> {
    return this.apiService.getAuthenticatedCall$<IComment[]>({ method: 'get', url: `${this.baseUrl}posts/${post_id}/${this.endpoint}` })
  }

}
