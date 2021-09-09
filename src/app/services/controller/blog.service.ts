import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from 'src/app/interfaces/IPost';
import { PostService } from '../data/post.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public posts$: Observable<IPost[]>;

  constructor(service: PostService) {
    this.posts$ = service.getList$();
  }

}
