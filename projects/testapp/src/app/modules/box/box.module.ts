import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BoxComponent } from './components/box/box.component';

@NgModule({
  declarations: [BoxComponent],
  imports: [CommonModule],
  exports: [BoxComponent],
})
export class BoxModule {}
