import { IUser } from "./IUser";

export interface IComment {
  created_at: string,
  id: number,
  post_id: number,
  text: string,
  updated_at: string,
  user: IUser,
}
