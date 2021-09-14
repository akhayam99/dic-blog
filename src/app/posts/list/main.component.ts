import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IUser } from 'src/app/_utils/interfaces/IUser';
import { BlogService } from 'src/app/_utils/services/controller/blog.service';

@Component({
  selector: 'dicf-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {

  constructor(private blogService: BlogService) { }

  onUserClick(user: IUser): void {
    this.blogService.loadPosts(user);
  }
}
