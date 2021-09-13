import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BlogService } from 'src/app/services/controller/blog.service';

@Component({
  selector: 'dicf-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent {

  username: string;
  password: string;
  showPassword: boolean = false;

  constructor(private blogService: BlogService) { }

}
