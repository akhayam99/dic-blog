import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginError } from 'src/app/_utils/services/auth/login.service';
import * as fromStore from 'src/app/_utils/store';
import { Login } from 'src/app/_utils/store';
import { getLoginForm } from './login.form.config';

@Component({
  selector: 'dicf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {

  form: FormGroup;
  loading$: Observable<boolean>
  errors$: Observable<LoginError>

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.form = getLoginForm(this.fb);
    this.loading$ = this.store.select(fromStore.getLogging);
    this.errors$ = this.store.select(fromStore.getLoginError);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.store.dispatch(Login({ email, password }));
    }
  }
}
