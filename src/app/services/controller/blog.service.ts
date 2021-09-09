import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { IPost } from 'src/app/interfaces/IPost';
import { IUser } from 'src/app/interfaces/IUser';
import { PostService } from '../data/post.service';
import { UserService } from '../data/user.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public posts$ = new Subject<IPost[]>();
  public users$ = new Subject<IUser[]>();
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private postService: PostService,
    private userService: UserService,
  ) {
    this.loadPosts();
    this.loadUsers();
  }

  loadPosts(user?: IUser) {
    this.loading$.next(true);
    this.postService.getList$({ user_id: user?.id }).pipe(
      take(1),
      tap(() => this.loading$.next(false))
    ).subscribe(posts => this.posts$.next(posts));
  }

  loadUsers() {
    this.userService.getList$().pipe(
      take(1)
    ).subscribe(users => this.users$.next(users));
  }

}
