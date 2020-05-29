import { AfterViewInit, Component, NgZone, ViewChild } from '@angular/core';
import { AceEditorComponent } from 'ng2-ace-editor';
import { Form } from 'ngx-forms';

import { ServerForm } from './app.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('editor', { static: true }) editor: AceEditorComponent;
  form: Form;
  json = `
  {
    "title": "Test form",
    "controls": {
      "test1": {
        "order": 1,
        "title": "username",
        "type": "input"
      },
      "test2": {
        "order": 2,
        "title": "password",
        "type": "input",
        "props": {
          "type": "password"
        }
      }
    }
  }
  `;

  constructor(private zone: NgZone) {
    this.updateForm();
  }

  ngAfterViewInit() {
    this.initEditor();
  }

  initEditor() {
    this.editor.setTheme('nord_dark');
    this.editor.setMode('json');
    this.editor.setOptions({
      enableSnippets: true,
      enableLiveAutocompletion: true,
      enableBasicAutocompletion: true,
    });
    this.editor.getEditor().getSession().setTabSize(2);
    this.editor.getEditor().completers = [
      {
        getCompletions: (editor, session, pos, prefix, callback) => {
          const keys = {
            title: 'Top/Control level key',
            controls: 'Top level key',
            order: 'Control level key',
            flags: 'Control level key',
            type: 'Control level key',
            props: 'Control level key',
            group: 'Control level key',
          };
          const list = Object.entries(keys).map(([key, meta]) => ({
            value: key,
            caption: key,
            meta,
          }));
          callback(null, list);
        },
      },
    ];
    this.editor.getEditor().commands.addCommand({
      name: 'RUN',
      bindKey: 'Ctrl+Return',
      exec: () => this.updateForm(),
    });
  }

  onBtnClick(code: string) {
    switch (code) {
      case 'RUN':
        this.updateForm();
        break;
    }
  }

  updateForm() {
    console.log('update form called!');
    try {
      this.zone.run(() => {
        const obj: ServerForm = JSON.parse(this.json);
        this.form = new Form(obj.title, obj.controls, []);
      });
    } catch (e) {
      console.error(e);
    }
  }

  printValues() {
    console.log('Values:', this.form.values);
  }
}
