import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { getLoginForm } from './login.form.config';

@Component({
  selector: 'dicf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {

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
