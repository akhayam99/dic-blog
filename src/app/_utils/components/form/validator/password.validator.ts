import { AbstractControl, ValidatorFn } from "@angular/forms";

const messages = {
  CheckMaius: 'Password deve contenere un carattere maiuscolo',
  CheckMinus: 'Password deve contenere un carattere minuscolo',
  CheckNumber: 'Password deve contenere un numero',
  CheckSamePassword: 'Le Password inserite devono essere uguali',
  CheckSpace: 'Password non può contenere spazi',
  CheckSymbol: 'Password deve contenere un carattere speciale',
  CheckTick: 'Password non può contenere apici',
  MinLength(length: number) { return `Password deve essere lunga almeno ${length} caratteri` },
}

export const CheckMaius: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.match(/[A-Z]/))
    return null;
  return { password_error: messages.CheckMaius }
}

export const CheckMinus: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.match(/[a-z]/))
    return null;
  return { password_error: messages.CheckMinus }
}

export const CheckNumber: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.match(/[\d]/))
    return null;
  return { password_error: messages.CheckNumber }
}

export const CheckSamePassword: ValidatorFn = (ctrl: AbstractControl) => {
  console.log(ctrl);
  if (ctrl.value['password'] === ctrl.value['passwordCheck'])
    return null
  return { password_error: messages.CheckSamePassword }
}

export const CheckSymbol: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.match(/[\W_]/))
    return null;
  return { password_error: messages.CheckSymbol }
}

export const CheckSpace: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.match(/[\s]/))
    return { password_error: messages.CheckSpace }
  return null;
}

export const CheckTick: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.match(/[\'\"]/))
    return { password_error: messages.CheckTick }
  return null;
}

export const MinLength: (length: number) => ValidatorFn = length => (ctrl: AbstractControl) => {
  if (ctrl.value.length < length)
    return { password_error: messages.MinLength(length) }
  return null;
}
