import { AbstractControl } from '@angular/forms';

export class CustomValidator {

    static validatePin(control: AbstractControl) {
        if (control.value.length < 6 || control.value.length > 6) {
            return { validPin: false };
        }
        return null;
    }
}

//  It is CustomVAlidator() Function Which is Generate By me.
//  For using Purpose for validaton on pin, which is use in employee-onboarding.component.ts 