export type CellData = string|number|Date;

export type RowData = Map<string, CellData>;

export interface ExportConfig {

    /**
     * Default name of the export file
     */
    fileName: string;

    /**
     * Data to be exported
     */
    data: RowData[];
}
