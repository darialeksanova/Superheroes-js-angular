import { UserAccessToken } from "./userAccessToken";

export interface UserData {
  username: string,
  email: string,
  password: string,
  accessToken?: UserAccessToken
}