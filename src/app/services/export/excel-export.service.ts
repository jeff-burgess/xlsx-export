import { Injectable } from '@angular/core';
import { ExportService } from './export.service';
import { ExportConfig } from './export-config';
import { ExcelTemplates } from './excel-templates';
import { ExportFormatter } from './export-formatter';
import { ExcelExportFormatter } from './excel-export-formatter';
import * as JSZip from 'jszip';
import * as FileSaver from 'file-saver';
import { JSZipGeneratorOptions } from 'jszip';

export enum ExportConfigValidationError {
  missingFileName = 'Missing or empty file name',
  missingData = 'Missing or empty data'
}

/**
 * A port of https://www.npmjs.com/package/zipcelx to angular service with minor enhancements.
 */
@Injectable()
export class ExcelExportService implements ExportService {

  formatter = new ExcelExportFormatter();

  constructor() {
  }

  // Should be in a base class, but separating it out seemed like a YAGNI rule violation
  public validate(config: ExportConfig): boolean {
    if (!config.fileName) {
      console.error(ExportConfigValidationError.missingFileName);
          return false;
      }
      if (!config.data || config.data.length === 0) {
          console.error(ExportConfigValidationError.missingData);
          return false;
      }
      return true;
  }

  public async export(config: ExportConfig): Promise<void> {

    if (!this.validate(config)) {
      throw new Error('Validation failed');
    }
    const worksheetContents = this.formatter.formatData(config.data);
    const worksheet = ExcelTemplates.worksheet.replace(ExcelTemplates.worksheetToken, worksheetContents);

    /*
      Zip File Structure:
      -------------------
      <zip_root>
        _rels
          .rels
        [Content_Types].xml
        xl
          _rels
            workbook.xml.rels
          styles.xml
          workbook.xml
          worksheets
            sheet1.xml
     */
    const zip = new JSZip();
    zip.file('_rels/.rels', ExcelTemplates.rels);
    zip.file('[Content_Types].xml', ExcelTemplates.contentTypes);
    zip.file('xl/_rels/workbook.xml.rels', ExcelTemplates.workbookRels);
    zip.file('xl/styles.xml', ExcelTemplates.styles);
    zip.file('xl/workbook.xml', ExcelTemplates.workbook);
    zip.file('xl/worksheets/sheet1.xml', worksheet);

    const zipBlob = await zip.generateAsync({type: 'blob'});

    FileSaver.saveAs(zipBlob, `${config.fileName}.xlsx`);
  }

}
