import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from './_utils/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  version$: Observable<string>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.version$ = this.store.select(fromStore.getVersion)
  }

}
