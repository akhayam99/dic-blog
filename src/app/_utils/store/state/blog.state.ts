import { IComment } from "src/app/_utils/interfaces/IComment";
import { IPost } from "src/app/_utils/interfaces/IPost";
import { IUser } from "src/app/_utils/interfaces/IUser";
import { LoginError } from "../../services/auth/login.service";

export interface IBlogStateAuth {
  loginError: LoginError,
  logging: boolean,
}

export interface IBlogStateData {
  list: IBlogStateDataList,
  detail: IBlogStateDataDetail,
  users: IBlogStateDataUsers,
}

export interface IBlogStateDataList {
  loading: boolean,
  posts: IPost[],
  user: IUser,
}

export interface IBlogStateDataDetail {
  comments: IComment[],
  loading: boolean,
  post_id: number,
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
