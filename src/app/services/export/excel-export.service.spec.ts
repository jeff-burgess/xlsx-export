import { TestBed, inject } from '@angular/core/testing';

import { ExcelExportService, ExportConfigValidationError } from './excel-export.service';
import { ExportConfig, RowData, CellData } from './export-config';

describe('ExportService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExcelExportService]
    });
  });

  it('should be created', inject([ExcelExportService], (service: ExcelExportService) => {
    expect(service).toBeTruthy();
  }));

  it('validate should detect null file name', inject([ExcelExportService], (service: ExcelExportService) => {
    const data: RowData = new Map<string, string|number|Date>();
    data.set('foo', 'bar');
    const config: ExportConfig = {
      fileName: null,
      data: [data]
    };
    spyOn(console, 'error');
    expect(service.validate(config)).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith(ExportConfigValidationError.missingFileName);
  }));

  it('validate should detect empty file name', inject([ExcelExportService], (service: ExcelExportService) => {
    const data: RowData = new Map<string, string|number|Date>();
    data.set('foo', 'bar');
    const config: ExportConfig = {
      fileName: '',
      data: [data]
    };
    spyOn(console, 'error');
    expect(service.validate(config)).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith(ExportConfigValidationError.missingFileName);
  }));

  it('validate should detect null data array', inject([ExcelExportService], (service: ExcelExportService) => {
    const config: ExportConfig = {
      fileName: 'name',
      data: null
    };
    spyOn(console, 'error');
    expect(service.validate(config)).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith(ExportConfigValidationError.missingData);
  }));

  it('validate should detect empty data array', inject([ExcelExportService], (service: ExcelExportService) => {
    const config: ExportConfig = {
      fileName: 'name',
      data: []
    };
    spyOn(console, 'error');
    expect(service.validate(config)).toBeFalsy();
    expect(console.error).toHaveBeenCalledWith(ExportConfigValidationError.missingData);
  }));

});
