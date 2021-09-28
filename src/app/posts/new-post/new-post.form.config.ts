import { FormBuilder, FormGroup } from "@angular/forms";

export const getNewPostForm: (fb: FormBuilder) => FormGroup = fb => fb.group({
  title: [
    ""
  ],
  text: [
    ""
  ],
}, {
  validators: []
});
