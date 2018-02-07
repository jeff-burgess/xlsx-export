import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExportService } from './services/export/export.service';
import { ExcelExportService } from './services/export/excel-export.service';
import { ExcelExportFormatter } from './services/export/excel-export-formatter';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: ExportService, useClass: ExcelExportService },
    { provide: ExcelExportFormatter, useClass: ExcelExportFormatter },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
