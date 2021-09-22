import { FormBuilder, FormGroup } from "@angular/forms";
import * as MailValidator from "src/app/_utils/components/form/validator/mail.validator";

export const getLoginForm: (fb: FormBuilder) => FormGroup = fb => fb.group({
  email: [
    "", [
      // sync validators
      MailValidator.CheckMail,
    ], [
      // async validators
    ],
  ],
  password: [
    ""
  ],
}, {
  validators: []
});
