import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getRegistrationForm } from './registration.form.config';

@Component({
  selector: 'dicf-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = getRegistrationForm(this.fb);
  }

  // onSubmit(): void {
  //   this.form.markAllAsTouched;
  //   if (this.form.valid)
  //     this.router.navigate['posts'];
  // }

}
