import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AceEditorModule } from 'ng2-ace-editor';
import { NgxFormsModule } from 'ngx-forms';

import { AppComponent } from './app.component';
import { BoxModule } from './modules/box/box.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AceEditorModule, BrowserModule, BoxModule, NgxFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
