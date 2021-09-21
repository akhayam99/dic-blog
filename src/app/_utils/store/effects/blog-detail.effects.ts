import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { RouterNavigationAction, ROUTER_NAVIGATION } from "@ngrx/router-store";
import { of } from "rxjs";
import { catchError, filter, map, switchMap } from "rxjs/operators";
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

  navigationDetail1$ = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    filter((routerInfo: RouterNavigationAction) => {
      return routerInfo.payload.routerState.url.match(/\/posts\/[\d]+$/) ? true : false;
    }),
    map((routerInfo: RouterNavigationAction) => {
      return fromActions.LoadPost({ post_id: +routerInfo.payload.routerState.url.match(/[\d]+$/)[0] })
    })
  ));

  loadPost$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadPost),
    switchMap(({ post_id }) => {
      return this.postService.getItem$(post_id).pipe(
        map(post => fromActions.LoadPostSuccess({ post })),
        catchError(error => of(fromActions.LoadPostFailed(error)))
      )
    })
  ));

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(fromActions.LoadPost),
    switchMap(({ post_id }) => {
      return this.commentService.getList$({ post_id }).pipe(
        map(comments => fromActions.LoadCommentsSuccess({ comments })),
        catchError(error => of(fromActions.LoadCommentsFailed(error)))
      )
    })
  ));

}
