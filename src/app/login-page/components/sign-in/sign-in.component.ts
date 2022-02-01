import { Component } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserData } from "src/app/types/userData";

@Component ({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  public form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private _router: Router) {}

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
      const formValidationErrors: ValidationErrors | null = this.form.errors;

      this.form.setErrors({ ...formValidationErrors, invalidData: true });
    } else {
      const usersLoginDataAsArray: UserData[] = JSON.parse(usersLoginDataAsString);
      const doesUserExist: boolean = usersLoginDataAsArray.some(userDataObj =>
        userDataObj.email === this.form.value.email.trim()
        &&
        userDataObj.password === this.form.value.password.trim()
      );

      if (doesUserExist) {
        void this._router.navigate(['/home']);
      } else {
        const formValidationErrors: ValidationErrors | null = this.form.errors;

        this.form.setErrors({ ...formValidationErrors, invalidData: true });
      }
    }
  }
}