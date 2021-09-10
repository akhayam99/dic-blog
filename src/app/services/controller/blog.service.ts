import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { IComment } from 'src/app/interfaces/IComment';
import { IPost } from 'src/app/interfaces/IPost';
import { IUser } from 'src/app/interfaces/IUser';
import { CommentService } from '../data/comment.service';
import { PostService } from '../data/post.service';
import { UserService } from '../data/user.service';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  public comments$ = new BehaviorSubject<IComment[]>([]);
  public post$ = new BehaviorSubject<IPost>(null);
  public posts$ = new BehaviorSubject<IPost[]>([]);
  public users$ = new BehaviorSubject<IUser[]>([]);
  public loading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private commentService: CommentService,
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

  loadPost(post_id: number) {
    this.loading$.next(true);
    let count = 2;
    const cb = () => {
      count--;
      if (count === 0)
        this.loading$.next(false);
    }

    this.postService.getItem$(post_id).pipe(
      take(1),
      tap(cb)
    ).subscribe(post => this.post$.next(post));

    this.commentService.getList$({ post_id }).pipe(
      take(1),
      tap(cb)
    ).subscribe(comments => this.comments$.next(comments));
  }

  loadUsers() {
    this.userService.getList$().pipe(
      take(1)
    ).subscribe(users => this.users$.next(users));
  }

}
