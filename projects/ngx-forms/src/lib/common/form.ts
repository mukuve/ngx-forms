import { FormGroup, ValidatorFn } from '@angular/forms';

import { Control } from './control';
import { ControlsGroup } from './group';
import { ControlConfig } from './types';

export class Form extends FormGroup {
  public readonly controls: ControlsGroup;

  constructor(
    public title: string = '',
    controls: { [key: string]: Control | ControlConfig } = {},
    validators: ValidatorFn[] = []
  ) {
    super(new ControlsGroup(controls), validators);
  }

  public get values(): Record<string, any> {
    const result = this.value || {};
    for (const { key, control, _cache } of this.controls) {
      let value = result[key];
      if (control.type === 'image') value = _cache.file;
      if (control.type === 'input') {
        const { type: itype } = control.props || ({} as any);
        if (itype === 'number') value = Number(value);
      }
      result[key] = value;
    }
    return result;
  }
}
