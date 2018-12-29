import { Directive } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appEmailvalidation]',
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailvalidationDirective, multi: true }]
})
export class EmailvalidationDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value === 'test@email.com') {
      return { validUser: false }
    }
    return null;
  }

}
