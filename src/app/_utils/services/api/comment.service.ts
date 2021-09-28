import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService { }

export interface NewComment {
  text: string,
}
