export interface ExportConfig {

    /**
     * Default name of the export file
     */
    fileName: string;

    /**
     * Data to be exported
     */
    data: Map<string, string|number|Date>[];
}
