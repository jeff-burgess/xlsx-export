import { Component } from '@angular/core';
import { ExportConfig } from './services/export/export-config';
import { ExportService } from './services/export/export.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Export Prototype';

  config: ExportConfig = {
      fileName: 'prototype',
      data: [
        // row 2
        new Map<string, string|number|Date>([
          ['test strings', 'hello'],
          ['test numbers', 1000],
          ['test dates', new Date()]
        ]),
        // row 3
        new Map<string, string|number|Date>([
          ['test strings', ''],
          ['test numbers', 0],
          ['test dates', new Date(0)]
        ]),
        // row 4
        new Map<string, string|number|Date>([
          ['test strings', null],
          ['test numbers', null],
          ['test dates', null]
        ])
      ]
    };

  constructor(private exportService: ExportService) {
  }

  public download(): void {
    this.exportService.export(this.config);
  }

}
