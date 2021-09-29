import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddPost, NavToPosts } from 'src/app/_utils/store';
import { getNewPostForm } from './new-post.form.config';


@Component({
  selector: 'dicf-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewPostComponent implements OnInit {
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
