import { AbstractControl, ValidatorFn } from "@angular/forms";

const messages = {
  MinLength(length: number) { return `Username deve essere lunga almeno ${length} caratteri` },
}

export const MinLength: (length: number) => ValidatorFn = length => (ctrl: AbstractControl) => {
  if (ctrl.value.length < length)
    return { username_error: messages.MinLength(length) }
  return null;
}
