import { ExportFormatter } from './export-formatter';
import { RowData, CellData } from './export-config';

export class ExcelExportFormatter implements ExportFormatter {

    public formatData(data: RowData[]): string {
        let formatted = this.formatHeaders(data[0]);
        data.forEach((rowValues: RowData, rowIndex: number) => {
            formatted += this.formatRow(rowValues, rowIndex + 2);
        });
        return formatted;
    }

    public formatHeaders(firstRowValues: RowData): string {
        const rowIndex = 1;
        let formatted = '';
        let columnIndex = 0;
        firstRowValues.forEach( (cellValue: CellData, key: string) => {
            formatted += this.formatCell(key, rowIndex, columnIndex);
            columnIndex++;
        });
        return `<row r="${rowIndex}">${formatted}</row>`;
    }

    public formatRow(rowValues: RowData, rowIndex: number): string {
        let formatted = '';
        let columnIndex = 0;
        rowValues.forEach( (cellValue: CellData, key: string) => {
            formatted += this.formatCell(cellValue, rowIndex, columnIndex);
            columnIndex++;
        });
        return `<row r="${rowIndex}">${formatted}</row>`;
    }

    public formatCell(cellValue: CellData, rowIndex: number, columnIndex: number): string {
        const cellAddress = String.fromCharCode(97 + columnIndex).toUpperCase() + rowIndex;
        if (typeof cellValue === 'number') {
            return this.formatNumberCell(cellValue as number, cellAddress);
        } else if (typeof cellValue === 'string') {
            return this.formatStringCell(cellValue as string, cellAddress);
        } else if (cellValue instanceof Date) {
            return this.formatDateCell(cellValue as Date, cellAddress);
        } else if (cellValue === null || typeof cellValue === 'undefined') {
            return '';
        } else {
            // Not sure if this code path is even accessible
            console.warn(`Cannot format unexpected data type: '${typeof cellValue}' for cell ${cellAddress}`);
            return '';
        }
    }

    private formatStringCell(cellValue: string, cellAddress: string): string {
        return `<c r="${cellAddress}" t="inlineStr"><is><t>${cellValue}</t></is></c>`;
    }

    private formatNumberCell(cellValue: number, cellAddress: string): string {
        return `<c r="${cellAddress}"><v>${cellValue}</v></c>`;
    }

    private formatDateCell(cellValue: Date, cellAddress: string): string {
        return `<c r="${cellAddress}" t="d" s="1"><v>${cellValue.toISOString()}</v></c>`;
    }
}
