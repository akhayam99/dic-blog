import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dicf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})

export class InputComponent implements ControlValueAccessor {

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
