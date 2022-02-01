import { FormControl } from "@angular/forms";
import { ALLOWED_EMAIL_DOMAINS } from "src/app/constants/allowed-email-domains";
import { MAX_NUMBER_OF_DOTS_BEFORE_AT_SIGN } from "src/app/constants/max-number-of-dots-before-at-sign";
import { MAX_NUMBER_OF_SYMBOLS_AFTER_AT_SIGN } from "src/app/constants/max-number-of-symbols-after-at-sign";

export class CustomEmailValidators {
  static restrictedDomain(control: FormControl): { [key: string]: boolean } | null {
    if (!ALLOWED_EMAIL_DOMAINS.some(domain => control.value.includes(domain))) {
      return {
        restrictedDomain: true
      }
    }

    return null;
  }

  static numberOfSymbolsAfterAtSign(control: FormControl): { [key: string]: boolean } | null {
    const indexOfAtSign: number = control.value.indexOf('@');
    const indexOfDotSign: number = control.value.lastIndexOf('.');

    if (indexOfAtSign !== -1) {
      const arrayOfCharsAfterAtSign: string[] = control.value.slice(indexOfAtSign + 1, indexOfDotSign).split('');
      const currentNumberOfSymbols: number = arrayOfCharsAfterAtSign.length;
  
      if (currentNumberOfSymbols > MAX_NUMBER_OF_SYMBOLS_AFTER_AT_SIGN) {
        return {
          numberOfSymbolsAfterAtSign: true
        }
      }
    }

    return null;
  }

  static numberOfDotsBeforeAtSign(control: FormControl): { [key: string]: boolean } | null {
    const indexOfAtSign: number = control.value.indexOf('@');

    if (indexOfAtSign !== -1) {
    const arrayOfCharsBeforeAtSign: string[] = control.value.slice(0, indexOfAtSign).split('');
    const currentNumberOfDots: number = arrayOfCharsBeforeAtSign.filter((char: string) => char === '.').length;

      if (currentNumberOfDots > MAX_NUMBER_OF_DOTS_BEFORE_AT_SIGN) {
        return {
          numberOfDotsBeforeAtSign: true
        }
      }
    }

    return null;
  }
}