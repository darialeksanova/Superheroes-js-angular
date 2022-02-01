import { Component } from "@angular/core";
import { FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { UserData } from "src/app/types/userData";

@Component ({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private router: Router) {}

  handleCreateNewAccountButtonClick(): void {
    this.router.navigate(['create-new-account']);
  }

  handleSignInButtonClick(): void {
    const usersLoginDataAsString: string | null = localStorage.getItem('usersLoginData');

    if (!usersLoginDataAsString) {
      const formValidationErrors: ValidationErrors | null = this.form.errors;

      this.form.setErrors({ ...formValidationErrors, invalidData: true });
    } else {
      const usersLoginDataAsArray: UserData[] = JSON.parse(usersLoginDataAsString);
      const doesUserExist: boolean = usersLoginDataAsArray.some(userDataObj =>
        userDataObj.email.trim() === this.form.value.email.trim()
        &&
        userDataObj.password.trim() === this.form.value.password.trim()
      );

      if (doesUserExist) {
        this.router.navigate(['/home']);
      } else {
        const formValidationErrors: ValidationErrors | null = this.form.errors;
        
        this.form.setErrors({ ...formValidationErrors, invalidData: true });
      }
    }
  }
}