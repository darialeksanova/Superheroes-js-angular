import { ChangeDetectionStrategy, Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AccessTokenService } from "src/app/services/access-token.service";
import { UserData } from "src/app/types/user-data";

@Component ({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  public readonly form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private _router: Router,
    private _accessTokenService: AccessTokenService
  ) {}

  public get emailControl(): AbstractControl {
    return this.form.get('email') as AbstractControl;
  }

  public get passwordControl(): AbstractControl {
    return this.form.get('password') as AbstractControl;
  }

  public navigateToCreateNewAccountForm(): void {
    void this._router.navigate(['create-new-account']);
  }

  public signIn(): void {
    const usersLoginDataAsString: string | null = localStorage.getItem('usersLoginData');

    if (!usersLoginDataAsString) {
      this._addInvalidDataErrorToFormValidationErrors();
    } else {
      const usersLoginDataAsArray: UserData[] = JSON.parse(usersLoginDataAsString);
      const user: UserData | undefined = this._findUserByEmailAndPassword(usersLoginDataAsArray);

      if (!user) {
        this._addInvalidDataErrorToFormValidationErrors();
        return;
      }

      if (!user.accessToken || !this._accessTokenService.isAccessTokenValid(user.accessToken.expiresAt)) {
        const userWithAccessToken: UserData = this._accessTokenService.addAccessTokenToUserData(user);

        localStorage.setItem('currentUser', JSON.stringify(userWithAccessToken));
      }

      void this._router.navigate(['home']);
    }
  }

  private _addInvalidDataErrorToFormValidationErrors(): void {
    const formValidationErrors: ValidationErrors | null = this.form.errors;

    this.form.setErrors({ ...formValidationErrors, invalidData: true });
  }

  private _findUserByEmailAndPassword(arrayOfUsers: UserData[]): UserData | undefined {
    return arrayOfUsers.find(userDataObj =>
      userDataObj.email === this.form.value.email.trim()
      &&
      userDataObj.password === this.form.value.password.trim()
    );
  }
}