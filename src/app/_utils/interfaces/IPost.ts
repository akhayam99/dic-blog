import { IUser } from "./IUser";

export interface IPost {
  comments_count: number,
  created_at: string,
  id: number,
  text: string,
  title: string,
  updated_at: string,
  user: IUser,
}
