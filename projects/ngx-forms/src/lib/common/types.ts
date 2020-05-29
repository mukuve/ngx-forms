import { ValidatorFn } from '@angular/forms';

import { Control } from './control';

// Types
export enum ControlTypes {
  input = 'input',
  area = 'area',
  select = 'select',
  ref = 'ref',
  image = 'image',
  view = 'view',
}
export type ControlType = keyof typeof ControlTypes;

export type ControlConfig = {
  title?: string;
  order?: number;
  type?: ControlType;
  props?: Record<string, any>;
  validators?: ValidatorFn[];
  flags?: string[]; // TODO create ControlFlag type = 'required' | 'multiple'...
  group?: string;
};

export type ControlsIteration = {
  key: string;
  control: Control;
  _cache?: Record<string, any>;
};
