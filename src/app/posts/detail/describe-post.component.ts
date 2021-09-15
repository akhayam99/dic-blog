import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/_utils/interfaces/IComment';
import { IPost } from 'src/app/_utils/interfaces/IPost';
import { BlogService } from 'src/app/_utils/services/controller/blog.service';

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
