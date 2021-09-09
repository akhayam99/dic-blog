import { Component, Injectable } from '@angular/core';
import { IUser } from './interfaces/IUser';
import { BlogService } from './services/controller/blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private blogService: BlogService) { }

  onUserClick(user: IUser): void {
    this.blogService.loadPosts(user);
  }
}
