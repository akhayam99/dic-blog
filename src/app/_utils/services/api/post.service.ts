import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService { }

export interface NewPost {
  text: string,
  title: string,
}
