import { TestBed, inject } from '@angular/core/testing';
import { ExcelExportFormatter } from './excel-export-formatter';
import { RowData, CellData } from './export-config';

describe('ExcelExportFormatter', () => {

    // column headers
    const colAHeader = 'sample strings';
    const colBHeader = 'sample numbers';
    const colCHeader = 'sample dates';
    // expected...also used for header test
    const row2Data = new Map<string, string|number|Date>();
    row2Data.set(colAHeader, 'Test');
    row2Data.set(colBHeader, 1000);
    row2Data.set(colCHeader, new Date('1995-12-17T03:24:00'));
    // empty
    const row3Data = new Map<string, string|number|Date>();
    row3Data.set(colAHeader, '');
    row3Data.set(colBHeader, 0);
    row3Data.set(colCHeader, new Date(0));
    // null
    const row4Data = new Map<string, string|number|Date>();
    row4Data.set(colAHeader, null);
    // combined
    const data = [row2Data, row3Data, row4Data];
    // results for headers
    const row1ColA = '<c r="A1" t="inlineStr"><is><t>sample strings</t></is></c>';
    const row1ColB = '<c r="B1" t="inlineStr"><is><t>sample numbers</t></is></c>';
    const row1ColC = '<c r="C1" t="inlineStr"><is><t>sample dates</t></is></c>';
    // results for cells with values
    const row2ColA = '<c r="A2" t="inlineStr"><is><t>Test</t></is></c>';
    const row2ColB = '<c r="B2"><v>1000</v></c>';
    const row2ColC = '<c r="C2" t="d" s="1"><v>1995-12-17T08:24:00.000Z</v></c>';
    // results for cells with empty values
    const row3ColA = '<c r="A3" t="inlineStr"><is><t></t></is></c>';
    const row3ColB = '<c r="B3"><v>0</v></c>';
    const row3ColC = '<c r="C3" t="d" s="1"><v>1970-01-01T00:00:00.000Z</v></c>';
    // results for cells with nulls
    const row4ColA = '';
    // expected row results
    const row1 = '<row r="1">' + row1ColA + row1ColB + row1ColC + '</row>';
    const row2 = '<row r="2">' + row2ColA + row2ColB + row2ColC + '</row>';
    const row3 = '<row r="3">' + row3ColA + row3ColB + row3ColC + '</row>';
    const row4 = '<row r="4">' + row4ColA + '</row>';
    // expected all data results
    const allData = row1 + row2 + row3 + row4;

    const formatter = new ExcelExportFormatter();

    // cell tests
    it('should format normal string cell', () => {
        expect(formatter.formatCell(row2Data.get(colAHeader), 2, 0)).toEqual(row2ColA);
    });
    it('should format normal number cell', () => {
        expect(formatter.formatCell(row2Data.get(colBHeader), 2, 1)).toEqual(row2ColB);
    });
    it('should format normal date cell', () => {
        expect(formatter.formatCell(row2Data.get(colCHeader), 2, 2)).toEqual(row2ColC);
    });
    it('should format empty string cell', () => {
        expect(formatter.formatCell(row3Data.get(colAHeader), 3, 0)).toEqual(row3ColA);
    });
    it('should format empty (0) number cell', () => {
        expect(formatter.formatCell(row3Data.get(colBHeader), 3, 1)).toEqual(row3ColB);
    });
    it('should format empty (0) date cell', () => {
        expect(formatter.formatCell(row3Data.get(colCHeader), 3, 2)).toEqual(row3ColC);
    });
    it('should format null cell', () => {
        expect(formatter.formatCell(row4Data.get(colAHeader), 4, 0)).toEqual(row4ColA);
    });

    // header tests
    it('should format column headers', () => {
        expect(formatter.formatHeaders(row2Data)).toEqual(row1);
    });

    // row tests
    it('should format normal values row', () => {
        expect(formatter.formatRow(row2Data, 2)).toEqual(row2);
    });
    it('should format empty values row', () => {
        expect(formatter.formatRow(row3Data, 3)).toEqual(row3);
    });
    it('should format null values row', () => {
        expect(formatter.formatRow(row4Data, 4)).toEqual(row4);
    });

    // all data tests
    it('should format all data', () => {
        expect(formatter.formatData(data)).toEqual(allData);
    });

});
