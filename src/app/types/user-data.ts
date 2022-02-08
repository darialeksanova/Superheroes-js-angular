import { UserAccessToken } from "./user-access-token";

export interface UserData {
  username: string,
  email: string,
  password: string,
  accessToken?: UserAccessToken
}