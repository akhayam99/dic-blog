import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'dicf-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PasswordComponent implements ControlValueAccessor {

  @Input() value: string;
  @Output() onChange = new EventEmitter();
  @Input() disabled: boolean = false;

  type: 'text' | 'password' = 'password';

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
  }

  onChangeInternal(value: string): void { }
  onTouchedInternal(): void { }

  onChangeInput(event: Event) {
    this.setValue(event.target['value'])
  }

  changeType(): void {
    if (this.type == 'password')
      this.type = 'text';
    else
      this.type = 'password';
  }
}
