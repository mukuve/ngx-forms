import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxFormControlComponent } from './components/control/control.component';
import { NgxFormComponent } from './components/form/form.component';

@NgModule({
  declarations: [NgxFormComponent, NgxFormControlComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [NgxFormComponent, NgxFormControlComponent],
})
export class NgxFormsModule {}
