import { AbstractControl, FormBuilder, FormGroup, ValidatorFn } from "@angular/forms";
import * as MailValidator from "src/app/_utils/components/form/validator/mail.validator";
import * as PasswordValidator from "src/app/_utils/components/form/validator/password.validator";

const CheckSamePassword: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value['password'] === ctrl.value['passwordCheck'])
    return null
  return { password_error: 'Le Password inserite devono essere uguali' }
}


export const getRegistrationForm: (fb: FormBuilder) => FormGroup = fb => fb.group({
  email: [
    "aa.khayam99@gmail.com", [
      MailValidator.CheckMail,
    ],
  ],
  first_name: [
    "Amin",
  ],
  last_name: [
    "Khayam",
  ],
  password: [
    "_Password1234_", [
      PasswordValidator.CheckMaius,
      PasswordValidator.CheckMinus,
      PasswordValidator.CheckNumber,
      PasswordValidator.CheckSpace,
      PasswordValidator.CheckSymbol,
      PasswordValidator.CheckTick,
      PasswordValidator.MinLength(8),
    ],
  ],
  passwordCheck: [
    "_Password1234_", [],
  ],
}, {
  validators: [
    CheckSamePassword,
  ]
});
