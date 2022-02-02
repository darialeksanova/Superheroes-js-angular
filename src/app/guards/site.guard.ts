import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { CanActivate, Router } from "@angular/router";
import { AccessTokenService } from "../services/access-token.service";
import { UserData } from "../types/userData";

@Injectable({providedIn: 'root'})
export class SiteGuard implements CanActivate {

  constructor(
    private _accessTokenService: AccessTokenService,
    private _router: Router,
    private snackBar: MatSnackBar
  ) {}

  public canActivate(): boolean {
    let isTokenValid: boolean = true;
    const currentUserAsString: string | null = localStorage.getItem('currentUser');

    if (currentUserAsString) {
      const currentUserParsed: UserData = JSON.parse(currentUserAsString);
      
      if (currentUserParsed.accessToken) {
        isTokenValid = this._accessTokenService.isAccessTokenValid(currentUserParsed.accessToken.expiresAt);
      }
    }

    if (!isTokenValid) {
      this._router.navigate(['sign-in']);
      this.snackBar.open('Your current session has expired. Please login again to continue using this app!');
    }

    return isTokenValid;
  }
}