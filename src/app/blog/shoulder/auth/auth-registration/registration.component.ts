import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NavToAuthLogin } from 'src/app/_utils/store';
import { getRegistrationForm } from './registration.form.config';

@Component({
  selector: 'dicf-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.form = getRegistrationForm(this.fb);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid)
      this.store.dispatch(NavToAuthLogin());
  }

}
