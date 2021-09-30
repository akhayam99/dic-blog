import { FormBuilder, FormGroup } from "@angular/forms";

export const getCommentsForm: (fb: FormBuilder) => FormGroup = fb => fb.group({
  text: [
    ""
  ]
}, {
  validators: []
});
