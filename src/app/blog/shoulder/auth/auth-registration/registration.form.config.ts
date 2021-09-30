import { AbstractControl, FormBuilder, FormGroup, ValidatorFn } from "@angular/forms";
import * as MailValidator from "src/app/_utils/components/form/validator/mail.validator";
import * as PasswordValidator from "src/app/_utils/components/form/validator/password.validator";
import * as UsernameValidator from "src/app/_utils/components/form/validator/username.validator";

const CheckSamePassword: ValidatorFn = (ctrl: AbstractControl) => {
  if (ctrl.value['password'] === ctrl.value['passwordCheck'])
    return null
  return { password_error: 'Le Password inserite devono essere uguali' }
}


export const getRegistrationForm: (fb: FormBuilder) => FormGroup = fb => fb.group({
  username: [
    "", [
      // sync validators
      UsernameValidator.MinLength(8),
    ], [
      // async validators
    ],
  ],
  email: [
    "", [
      // sync validators
      MailValidator.CheckMail,
    ], [
      // async validators
    ],
  ],
  password: [
    "", [
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
    "", [],
  ],
}, {
  validators: [
    CheckSamePassword,
  ]
});
