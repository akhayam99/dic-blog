import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

const customMinLength: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.length < 8)
    return {
      customMinLength: 'La lunghezza deve essere superiore a 8 caratteri',
    }
  return null;
}

const customMaxLengthWithValue: (length: number) => ValidatorFn = length => (ctrl: AbstractControl) => {
  if (ctrl.value.length > length)
    return {
      customMaxLengthWithValue: 'La lunghezza deve essere minore di ' + length + ' caratteri',
    }
  return null;
}

export const customFormMinLength: ValidatorFn = (ctrl: AbstractControl) => {
  const { username, password } = ctrl.value;

  if ((username.length + password.length) < 20)
    return {
      customMaxLengthWithValue: 'La lunghezza totale di username e password deve essere di 20',
    }
  return null;
}

export const getLoginForm: (fb: FormBuilder) => FormGroup = fb => fb.group({
  username: [
    "",
    [
      customMinLength,
      customMaxLengthWithValue(16),
    ],
    [],
  ],
  password: [
    "",
    [
      Validators.minLength(8),
      Validators.maxLength(16),
      Validators.required
    ],
    [],
  ],
}, { validators: [customFormMinLength] });

/*
  <controller_name>: [
    "", // valore iniziale
    [], // lista di validatori sincroni
    [], // lista di validatori asincroni
*/
