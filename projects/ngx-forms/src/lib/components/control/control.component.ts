import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { ControlType, ControlTypes } from './../../common/types';

@Component({
  selector: 'ngx-form-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxFormControlComponent),
      multi: true,
    },
  ],
})
export class NgxFormControlComponent implements OnInit, ControlValueAccessor {
  @Input() type: ControlType;
  @Input() title: string;
  @Input() props: { [key: string]: any };

  id: string;
  value: any;
  disabled: boolean;
  onChange: any = (_: any) => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {
    this.id = `${Number(new Date())}-${this.type}`;
    console.log(`Control ${this.type} init!!`);
    if (!(this.type in ControlTypes)) {
      console.error(`Invalid control type '${this.type}'.`);
    }
  }

  // ControlValueAccessor
  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }

  test(...args: any[]) {
    console.log(args);
  }
}
