import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { getLoginForm } from './login.form.config';

@Component({
  selector: 'dicf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.form = getLoginForm(this.fb);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid)
      this.router.navigate(['posts']);
  }
}
