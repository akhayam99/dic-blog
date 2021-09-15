import { AbstractControl, ValidatorFn } from "@angular/forms";

const messages = {
  CheckMail: `La mail inserita non è valida`,
}

export const CheckMail: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value.match(/^[a-zA-A\._]+(|\.[a-zA-Z\._]+)@[a-zA-Z]+(|\.[a-zA-Z])+\.[a-zA-Z]{2,5}$/))
    return null;
  return { mail_error: messages.CheckMail }
}
