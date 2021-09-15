import { IComment } from "src/app/_utils/interfaces/IComment";
import { IPost } from "src/app/_utils/interfaces/IPost";
import { IUser } from "src/app/_utils/interfaces/IUser";

export interface IBlogStateAuth { }

export interface IBlogStateData {
  list: IBlogStateDataList,
  detail: IBlogStateDataDetail,
  users: IBlogStateDataUsers,
}

export interface IBlogStateDataList {
  loading: boolean,
  posts: IPost[],
}

export interface IBlogStateDataDetail {
  comments: IComment[],
  loading: boolean,
  post: IPost,
}

export interface IBlogStateDataUsers {
  users: IUser[],
  loading: boolean,
}

export interface IBlogState {
  auth: IBlogStateAuth,
  data: IBlogStateData
}