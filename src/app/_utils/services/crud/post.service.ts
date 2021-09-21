import { Injectable } from '@angular/core';
import { IPost } from '../../interfaces/IPost';
import { CrudApiService } from './crud-api.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends CrudApiService<IPost> {
  endpoint = 'posts';
}
