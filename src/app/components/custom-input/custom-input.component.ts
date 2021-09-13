import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'dicf-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomInputComponent {

  @Input() type: string;
  @Input() class: string;
  error: string;

  constructor() { }

  onChange: any = () => { };
  onTouch: any = () => {
    if (this.val === '') {
      this.error = 'Campo obbligatorio';
    }
  };
  val = "";

  set value(val: any) {
    if (val !== undefined && this.val !== val) {
      this.val = val;
      this.onChange(val);
      this.onTouch(val);
    }
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

}
