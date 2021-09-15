import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

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

const passwordMinusChar: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.match(/[a-z]/))
    return null;
  return { customMinLength: 'La password deve contenere un carattere minuscolo' }
}

export const getLoginForm: (fb: FormBuilder) => FormGroup = fb => fb.group({
  username: [
    "",
    [
      customMinLength,
      customMaxLengthWithValue(16),
      Validators.required,
    ],
    [],
  ],
  password: [
    "",
    [
      passwordMinusChar,
      // Validators.minLength(8),
      // Validators.required,
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
