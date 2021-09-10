import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/interfaces/IComment';
import { IPost } from 'src/app/interfaces/IPost';
import { BlogService } from 'src/app/services/controller/blog.service';

@Component({
  selector: 'dicf-describe-post',
  templateUrl: './describe-post.component.html',
  styleUrls: ['./describe-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DescribePostComponent implements OnInit {

  loading$: Observable<boolean>;
  post$: Observable<IPost>;
  comments$: Observable<IComment[]>;
  constructor(private activatedRout: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.activatedRout.params.subscribe(({ id }) => this.blogService.loadPost(+id));
    this.loading$ = this.blogService.loading$;
    this.post$ = this.blogService.post$;
    this.comments$ = this.blogService.comments$;
  }
}
