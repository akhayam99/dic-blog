import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddPost, NavToPosts } from 'src/app/_utils/store';
import { getNewPostForm } from './pubblication-create.form.config';


@Component({
  selector: 'dicf-pubblication-create',
  templateUrl: './pubblication-create.component.html',
  styleUrls: ['./pubblication-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PubblicationCreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) { }

  ngOnInit(): void {
    this.form = getNewPostForm(this.fb);
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    const { title, text } = this.form.value;
    this.store.dispatch(AddPost({title, text}));
  }

  goToPosts(): void {
    this.store.dispatch(NavToPosts());
  }

}
