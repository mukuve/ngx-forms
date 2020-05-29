import { FormControl } from '@angular/forms';

import { ControlConfig, ControlType } from './types';

export class Control extends FormControl {
  public order: number;
  public title: string;
  public type: ControlType;
  public props: { [key: string]: any };

  constructor(value: any = null, config: ControlConfig = {}) {
    const {
      order = Number.MAX_SAFE_INTEGER,
      title = '',
      type = 'input',
      props = {},
      validators = [],
    } = config;
    super(value, validators);
    Object.assign(this, { order, title, type, props: { ...props } });
  }
}
