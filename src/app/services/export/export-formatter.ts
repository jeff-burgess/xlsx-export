import { RowData, CellData } from './export-config';
export interface ExportFormatter {
    formatData(data: RowData[]): string;
    formatHeaders(firstRowValues: RowData): string;
    formatRow(rowValues: RowData, rowIndex: number): string;
    formatCell(cellValue: CellData, rowIndex: number, columnIndex: number): string;
}
