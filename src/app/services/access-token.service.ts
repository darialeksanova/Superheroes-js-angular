import { Injectable } from "@angular/core";
import { UserData } from "../types/userData";

const MILLISECONDS_IN_HOUR: number = 60 * 60 * 1000;

@Injectable({providedIn: 'root'})
export class AccessTokenService {
  private generateUniqueAccessToken(username: string): string {
    const spaceInUsernameIndex: number = username.indexOf(' ');
    return new Date().getTime().toString() + username.slice(0, spaceInUsernameIndex);
  }

  public addAccessTokenToUserData(userData: UserData): UserData {
    const accessToken: string = this.generateUniqueAccessToken(userData.username);
    const nowInMilliseconds: number = new Date().getTime();
    const expirationTime: Date = new Date(nowInMilliseconds + MILLISECONDS_IN_HOUR);

    return {
      ...userData,
      accessToken: {
        token: accessToken,
        expiresAt: expirationTime
      }
    }
  }

  public isAccessTokenValid(tokenExpirationDate: Date): boolean {
    return new Date(tokenExpirationDate).getTime() > new Date().getTime();
  }
}