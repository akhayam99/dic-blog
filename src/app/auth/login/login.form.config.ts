import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import * as PasswordValidator from "src/app/_utils/components/form/validator/password.validator";

const customMinLength: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.length < 8)
    return { customMinLength: 'La lunghezza deve essere superiore a 8 caratteri' }
  return null;
}

const customMaxLengthWithValue: (length: number) => ValidatorFn = length => (ctrl: AbstractControl) => {
  if (ctrl.value.length > length)
    return { customMaxLengthWithValue: 'La lunghezza deve essere minore di ' + length + ' caratteri' }
  return null;
}

export const getLoginForm: (fb: FormBuilder) => FormGroup = fb => fb.group({
  username: [
    "",
    [
      Validators.minLength(8)
    ],
    [],
  ],
  password: [
    "",
    [
      PasswordValidator.CheckMaius,
      PasswordValidator.CheckMinus,
      PasswordValidator.CheckNumber,
      PasswordValidator.CheckSpace,
      PasswordValidator.CheckSymbol,
      PasswordValidator.CheckTick,
      PasswordValidator.MinLength(8),
    ],
    [],
  ],
}, { validators: [] });

/*
  <controller_name>: [
    "", // valore iniziale
    [], // lista di validatori sincroni
    [], // lista di validatori asincroni
*/
