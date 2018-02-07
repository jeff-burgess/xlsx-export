export interface ExportFormatter {
    formatData(data: Map<string, string|number|Date>[]): string;
    formatHeaders(firstRowValues: Map<string, string|number|Date>): string;
    formatRow(rowValues: Map<string, string|number|Date>, rowIndex: number): string;
    formatCell(cellValue: string|number|Date, rowIndex: number, columnIndex: number): string;
}
