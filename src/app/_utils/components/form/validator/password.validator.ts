import { AbstractControl, ValidatorFn } from "@angular/forms";

const messages = {
  CheckMaius: 'La password deve contenere un carattere maiuscolo',
  CheckMinus: 'La password deve contenere un carattere minuscolo',
  CheckNumber: 'La password deve contenere un numero',
  CheckSymbol: 'La password deve contenere un carattere speciale',
  CheckSpace: 'La password non può contenere spazi',
  CheckTick: 'La password non può contenere apici',
  MinLength(length: number) { return `La password deve essere lunga almeno ${length} caratteri` },
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
