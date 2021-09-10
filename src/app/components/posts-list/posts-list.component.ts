import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IPost } from 'src/app/interfaces/IPost';
import { BlogService } from 'src/app/services/controller/blog.service';

@Component({
  selector: 'dicf-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class PostsListComponent implements OnInit {

loading$: Observable<boolean>
posts$: Observable<IPost[]>;
postsCount$: Observable<number>;
differentUser$: Observable<number>;

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    console.log('nInit')
    this.loading$ = this.blogService.loading$;
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

    this.posts$.subscribe((val) => {console.log(val)})
    console.log('ipo')
  }
}
