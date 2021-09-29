import { IComment } from "src/app/_utils/interfaces/IComment";
import { IPost } from "src/app/_utils/interfaces/IPost";
import { IUser } from "src/app/_utils/interfaces/IUser";
import { VersionError, VersionResponse } from "../../services/api/info.service";
import { LoginError, LoginResponse } from "../../services/auth/login.service";


export interface IBlogState {
  auth: IBlogStateAuth,
  data: IBlogStateData,
  info: IBlogStateInfo,
}

export interface IBlogStateAuth {
  logging: boolean,
  loginError: LoginError,
  loginInfo: LoginResponse,
  userData: any,
  showLogin: boolean,
}
export interface IBlogStateData {
  list: IBlogStateDataList,
  detail: IBlogStateDataDetail,
  users: IBlogStateDataUsers,
}

export interface IBlogStateInfo {
  versionInfo: VersionResponse,
  versionError: VersionError,
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

