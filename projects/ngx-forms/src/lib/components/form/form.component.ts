import { Component, Input, OnInit } from '@angular/core';

import { Form } from '../../common/form';
import { ControlTheme } from './../../common/types';

@Component({
  selector: 'ngx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class NgxFormComponent implements OnInit {
  currentForm: Form;
  controls: any[];
  @Input() theme: ControlTheme = 'filled';

  constructor() {}

  @Input() set form(value: Form) {
    this.currentForm = value;
    this.controls = Array.from(this.currentForm.controls);
  }

  ngOnInit() {}
}
