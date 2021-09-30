import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { IComment } from 'src/app/_utils/interfaces/IComment';
import { AddComments } from 'src/app/_utils/store';
import { getCommentsForm } from './comments.form.config';

@Component({
  selector: 'dicf-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentsComponent implements OnInit {

  @Input() comments: IComment[];
  @Input() isLogged: boolean;
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.form = getCommentsForm(this.fb);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    if (this.form.valid) {
      const { text } = this.form.value;
      this.store.dispatch(AddComments({ text }));
    }
  }

}
