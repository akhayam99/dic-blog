import { Injectable } from '@angular/core';
import { IComment } from '../../interfaces/IComment';
import { CrudApiService } from './crud-api.service';

@Injectable({
  providedIn: 'root'
})

export class CommentService extends CrudApiService<IComment> {
  endpoint = 'comments';
}
