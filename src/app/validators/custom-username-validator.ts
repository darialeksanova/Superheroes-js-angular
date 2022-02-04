import { FormControl } from "@angular/forms";
import { MIN_NUMBER_OF_WORDS_IN_USERNAME } from "src/app/constants/min-number-of-words-in-username";
import { ONE_DIGIT_NUMBERS } from "src/app/constants/one-digit-numbers";

export class CustomUsernameValidators {
  static numberOfWords(control: FormControl): { [key: string]: boolean } | null {
    if (control.value.split(' ').length < MIN_NUMBER_OF_WORDS_IN_USERNAME) {
      return {
        numberOfWords: true
      }
    }

    return null;
  }

  static includesNumbers(control: FormControl): { [key: string]: boolean } | null {
    if (ONE_DIGIT_NUMBERS.some(num => control.value.includes(num))) {
      return {
        includesNumbers: true
      }
    }

    return null;
  }
}