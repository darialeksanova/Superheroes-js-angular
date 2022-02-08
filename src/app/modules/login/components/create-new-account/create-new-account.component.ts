import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserData } from "src/app/types/user-data";
import { CustomEmailValidators } from "../../../../validators/custom-email-validators";
import { CustomPasswordValidators } from "../../../../validators/custom-password-validators";
import { CustomUsernameValidators } from "../../../../validators/custom-username-validator";

@Component ({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateNewAccountComponent implements OnInit {
  public readonly form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required, 
      Validators.minLength(8),
      Validators.pattern(/^[a-zA-Z -]/),
      CustomUsernameValidators.numberOfWords
    ]),
    email: new FormControl('', [
      Validators.required,
      CustomEmailValidators.restrictedDomain,
      CustomEmailValidators.numberOfSymbolsAfterAtSign,
      CustomEmailValidators.numberOfDotsBeforeAtSign
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      CustomPasswordValidators.noNumbersIncluded,
      CustomPasswordValidators.noCapitalLettersIncluded,
      CustomPasswordValidators.noSpecialSymbolsIncluded
    ])
  })

  constructor(private _router: Router) {}

  public ngOnInit(): void {
    this.passwordControl.addValidators(
      CustomPasswordValidators.containsPartsOfNameOrEmail(
        this.usernameControl, 
        this.emailControl
      )
    );
  }

  public get usernameControl(): AbstractControl {
    return this.form.get('username') as AbstractControl;
  }

  public get emailControl(): AbstractControl {
    return this.form.get('email') as AbstractControl;
  }

  public get passwordControl(): AbstractControl {
    return this.form.get('password') as AbstractControl;
  }

  public navigateToSignInForm(): void {
    void this._router.navigate(['sign-in']);
  }

  public signUp(): void {
    const usersLoginDataAsString: string | null = localStorage.getItem('usersLoginData');

    if (!usersLoginDataAsString) {
      localStorage.setItem('usersLoginData', JSON.stringify([this._createUserDataObjectFromFormValue()]));
    } else {
      const usersLoginDataAsArray: UserData[] = JSON.parse(usersLoginDataAsString);
      const isEmailUsed: boolean = usersLoginDataAsArray.some(userDataObj => userDataObj.email === this.emailControl.value.trim());

      if (isEmailUsed) {
        const emailValidationErrors: ValidationErrors | null | undefined = this.emailControl.errors;

        this.emailControl.setErrors({...emailValidationErrors, emailIsNotUnique: true});
      } else {
        localStorage.setItem('usersLoginData', JSON.stringify([...usersLoginDataAsArray, this._createUserDataObjectFromFormValue()]));
      }
    }
    this.navigateToSignInForm();
  }

  private _createUserDataObjectFromFormValue(): UserData {
    return {
      username: this.form.value.username.trim(),
      email: this.form.value.email.trim(),
      password: this.form.value.password.trim()
    }
  }

  public checkPasswordValidityByLengthAndPassedError(error: string) {
    return this.passwordControl.value.length && this.passwordControl.errors?.[error];
  }
}