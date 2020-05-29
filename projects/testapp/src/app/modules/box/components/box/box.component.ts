import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { ToolbarBtn } from './box.types';

@Component({
  selector: 'ngx-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit {
  @Input() title = '';
  @Input() btns: ToolbarBtn[] = [];
  @Output() btnClick: EventEmitter<string> = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) {
    this.btnClick = new EventEmitter();
  }

  ngOnInit() {
    this.btns.forEach((btn) => {
      btn.styles = this.sanitizer.bypassSecurityTrustStyle(`{
        --color: ${btn.color || 'inherit'}
      }`);
    });
  }
}
