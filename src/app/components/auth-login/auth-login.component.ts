import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getLoginForm } from './auth-login.form.config';

@Component({
  selector: 'dicf-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class AuthLoginComponent implements OnInit {

  form: FormGroup;
  username: string = 'uiu';
  password: string = null;
  showPassword: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = getLoginForm(this.fb);
  }

  onUsernameChanged(value: string): void {
    this.username = value
  }
}
