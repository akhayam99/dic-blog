import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getRegisterLoader, Register } from 'src/app/_utils/store';
import { getRegistrationForm } from './registration.form.config';

@Component({
  selector: 'dicf-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegistrationComponent implements OnInit {

  loading$: Observable<boolean>;
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.form = getRegistrationForm(this.fb);
    this.loading$ = this.store.select(getRegisterLoader)
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { email, first_name, last_name, password } = this.form.value;
      this.store.dispatch(Register({ email, first_name, last_name, password }));
    }
  }

}
