import { Directive } from '@angular/core';
import { NG_VALIDATORS, FormGroup, Validator } from '@angular/forms';

@Directive({
  selector: '[e4uAddressValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AddressDirective,
      multi: true
    }
  ]
})
export class AddressDirective implements Validator {

  constructor() {
  }

  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls.address;
    const cityControl = formGroup.controls.city;
    const countryControl = formGroup.controls.country;
    const onlineUrlControl = (formGroup.root as FormGroup).controls.onlineUrl;

    if ((addressControl && addressControl.value &&
         cityControl && cityControl.value &&
         countryControl && countryControl.value) ||
        (onlineUrlControl && onlineUrlControl.value)) {
      return null;
    } else {
      return {
        addressError: 'Address or online url should be populated.'
      };
    }
  }

}
