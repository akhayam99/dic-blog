import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'dicf-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]
})
export class PasswordComponent implements ControlValueAccessor {

  @Input() disabled: boolean = false;
  @Input() errors: { [key: string]: any };
  @Input() value: string;
  @Output() onChange = new EventEmitter();

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

  onChangeInput(value: string) {
    this.setValue(value)
  }

  changeType(): void {
    if (this.type == 'password')
      this.type = 'text';
    else
      this.type = 'password';
  }
}
