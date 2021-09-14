import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'dicf-base',
  template: '',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent implements ControlValueAccessor {

  @Input() disabled: boolean = false
  @Input() errors: { [key: string]: any };
  @Input() type: string;
  @Input() value: string;
  @Output() onChange = new EventEmitter()

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeInternal = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedInternal = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  setValue(value: string): void {
    this.value = value;
    this.onChange.emit(value);
    this.onChangeInternal(value);
    this.onTouchedInternal();
  }

  onChangeInternal(value: string): void { }
  onTouchedInternal(): void { }

  onChangeInput(event: Event) {
    this.setValue(event.target['value'])
  }
}
