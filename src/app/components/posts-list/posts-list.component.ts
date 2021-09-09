import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from 'src/app/interfaces/IPost';
import { BlogService } from 'src/app/services/controller/blog.service';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'dicf-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsListComponent implements OnInit {

posts$: Observable<IPost[]>;
postsCount$: Observable<number>;
differentUser$: Observable<number>;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.posts$ = this.blogService.posts$;
    this.postsCount$ = this.posts$.pipe(
      map(posts => posts.length)
    );
    this.differentUser$ = this.posts$.pipe(
      map(posts => {
        let uniqueUser = [];
        posts.forEach(post => {
          if (!uniqueUser.includes(post.user.id))
            uniqueUser.push(post.user.id)
        });
        return uniqueUser.length;
      })
    )
  }
}
