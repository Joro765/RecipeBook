import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective implements Validator {

  validate(control: FormControl) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const valid = emailRegex.test(control.value);
    return valid ? null : { invalidEmail: true };
  }
}
