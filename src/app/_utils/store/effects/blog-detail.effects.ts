import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { AddPost, AddPostFailed, AddPostSuccess, DeletePost, DeletePostFailed, DeletePostSuccess, LoadCommentsFailed, LoadCommentsSuccess, LoadPost, LoadPostFailed, LoadPostSuccess } from "..";
import { CommentService } from "../../services/crud/comment.service";
import { PostService } from "../../services/crud/post.service";

@Injectable()
export class BlogDetailEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  LoadPost$ = createEffect(() => this.actions$.pipe(
    ofType(LoadPost),
    switchMap(({ post_id }) => {
      return this.postService.getItem$(post_id).pipe(
        map(post => LoadPostSuccess({ post })),
        catchError(error => of(LoadPostFailed(error)))
      )
    })
  ));

  LoadComments$ = createEffect(() => this.actions$.pipe(
    ofType(LoadPost),
    switchMap(({ post_id }) => {
      return this.commentService.getComments$(post_id).pipe(
        map(comments => LoadCommentsSuccess({ comments })),
        catchError(error => of(LoadCommentsFailed(error)))
      )
    })
  ));

  AddPost$ = createEffect(() => this.actions$.pipe(
    ofType(AddPost),
    switchMap(({ title, text }) => {
      return this.postService.save$({ title, text }).pipe(
        map(item => AddPostSuccess()),
        catchError(error => of(AddPostFailed(error)))
      );
    }),
  ));

  DeletePost$ = createEffect(() => this.actions$.pipe(
    ofType(DeletePost),
    switchMap(({ post_id }) => {
      return this.postService.deleteItem$(post_id).pipe(
        map(item => DeletePostSuccess(item)),
        catchError(error => of(DeletePostFailed(error)))
      );
    }),
  ));

}
