import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserData } from "src/app/types/userData";
import { CustomEmailValidators } from "../../custom-validators/custom-email-validators";
import { CustomPasswordValidators } from "../../custom-validators/custom-password-validators";
import { CustomUsernameValidators } from "../../custom-validators/custom-username-validator";

@Component ({
  selector: 'app-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.scss']
})
export class CreateNewAccountComponent implements OnInit {
  form: FormGroup = new FormGroup({
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form.get('password')?.addValidators(
      CustomPasswordValidators.containsPartsOfNameOrEmail(
        this.form.get('username') as AbstractControl, 
        this.form.get('email') as AbstractControl
      )
    );
  }

  handleSignInButtonClick(): void {
    this.router.navigate(['sign-in']);
  }

  handleSignUpButtonClick(): void {
    const usersLoginDataAsString: string | null = localStorage.getItem('usersLoginData');

    if (!usersLoginDataAsString) {
      localStorage.setItem('usersLoginData', JSON.stringify([{
        username: this.form.get('username')?.value,
        email: this.form.get('email')?.value,
        password: this.form.get('password')?.value
      }]));
    } else {
      const usersLoginDataAsArray: UserData[] = JSON.parse(usersLoginDataAsString);

      if (usersLoginDataAsArray.some(userDataObj => userDataObj.email === this.form.get('email')?.value)) {
        const emailValidationErrors: ValidationErrors | null | undefined = this.form.get('email')?.errors;
        
        this.form.get('email')?.setErrors({...emailValidationErrors, emailIsNotUnique: true});
      } else {
        localStorage.setItem('usersLoginData', JSON.stringify([...usersLoginDataAsArray, {
          username: this.form.get('username')?.value,
          email: this.form.get('email')?.value,
          password: this.form.get('password')?.value
        }]));
        this.router.navigate(['sign-in']);
      }
    }
  }
}