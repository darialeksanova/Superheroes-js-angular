import { AbstractControl, FormControl } from "@angular/forms";
import { CAPITAL_LETTERS_REGEXP } from "src/app/constants/capital-letters-regexp";
import { ONE_DIGIT_NUMBERS } from "src/app/constants/one-digit-numbers";

export class CustomPasswordValidators {
  static containsPartsOfNameOrEmail(usernameFormControl: AbstractControl, emailFormControl: AbstractControl): (control: AbstractControl) => {[key: string]: boolean} | null {

    return (control: AbstractControl) => {
      const usernamePartsArray: string[] = usernameFormControl.value.split(' ');
      const indexOfAtSign: number = emailFormControl.value.indexOf('@');
      const emailPart: string = emailFormControl.value.slice(0, indexOfAtSign);
      const restrictedValues: string[] = usernamePartsArray.concat(emailPart);

      if (restrictedValues.some(value => control.value.includes(value))) {
        return {
          containsPartsOfNameOrEmail: true
        }
      }

      return null;
    };
  }

  static noCapitalLettersIncluded(control: FormControl): {[key: string]: boolean} | null {
    if (!control.value.match(CAPITAL_LETTERS_REGEXP)) {
      return {
        noCapitalLettersIncluded: true,
      };
    }

    return null;
  }

  static noNumbersIncluded(control: FormControl): {[key: string]: boolean} | null {
    if (!ONE_DIGIT_NUMBERS.some(num => control.value.includes(num))) {
      return {
        noNumbersIncluded: true
      }
    }

    return null;
  }

  static noSpecialSymbolsIncluded(control: FormControl): {[key: string]: boolean} | null {
    const allowedSpecialSymbols: string[] = ['$', '%', '.', '&', '!', '-'];

    if (!allowedSpecialSymbols.some(symbol => control.value.includes(symbol))) {
      return {
        noSpecialSymbolsIncluded: true
      }
    }

    return null;
  }
}