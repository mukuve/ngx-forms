// tslint:disable: curly
// tslint:disable: variable-name
import { Control } from './control';
import { ControlConfig, ControlsIteration } from './types';

export const FormCache = Symbol('Form cache symbol');
export class ControlsGroup {
  [key: string]: Control;
  [FormCache]: Record<string, any>;
  [Symbol.iterator]: () => Iterator<ControlsIteration> = () => {
    let index = -1;
    const entries = Object.entries(this);
    const sorted = entries.sort(([ak, ac], [bk, bc]) => ac.order - bc.order);
    return {
      next: () => {
        let value: any;
        const done = ++index >= sorted.length;
        if (!done) {
          const [key, control] = sorted[index];
          const _cache = (this[FormCache] || {})[key];
          value = { key, control, _cache };
        }
        return { value, done };
      },
    };
  };

  constructor(controls: { [key: string]: Control | ControlConfig }) {
    const _controls: { [key: string]: Control } = {};
    for (const [k, c] of Object.entries(controls)) {
      if (c instanceof Control) _controls[k] = c;
      else _controls[k] = new Control(null, c);
    }
    Object.assign(this, _controls);
  }
}
