import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { BaseComponent } from '../_base/base.component';

@Component({
  selector: 'dicf-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent extends BaseComponent {

  @Output() onSearch = new EventEmitter()

  onSearchClick(): void {
    this.onSearch.emit(this.value)
  }
}
