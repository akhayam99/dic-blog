import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { CommentService } from "../../services/crud/comment.service";
import { PostService } from "../../services/crud/post.service";
import * as fromActions from "../actions";

@Injectable()
export class BlogDetailEffects {
  constructor(
    private actions$: Actions,
    private postService: PostService,
    private commentService: CommentService
  ) { }

  LoadPost$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadPost),
    switchMap(({ post_id }) => {
      return this.postService.getItem$(post_id).pipe(
        map(post => fromActions.LoadPostSuccess({ post })),
        catchError(error => of(fromActions.LoadPostFailed(error)))
      )
    })
  ));

  LoadComments$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadPost),
    switchMap(({ post_id }) => {
      return this.commentService.getList$({ post_id }).pipe(
        map(comments => fromActions.LoadCommentsSuccess({ comments })),
        catchError(error => of(fromActions.LoadCommentsFailed(error)))
      )
    })
  ));

  AddPost$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.AddPost),
    switchMap(({ title, text }) => {
      return this.postService.save$({title, text}).pipe(
        map(item => fromActions.AddPostSuccess()),
        catchError(error => of(fromActions.AddPostFailed(error)))
      );
    }),
  ));

}
