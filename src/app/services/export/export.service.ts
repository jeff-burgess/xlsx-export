import { ExportConfig } from './export-config';
import { ExportFormatter } from './export-formatter';

export abstract class ExportService {
  abstract validate(config: ExportConfig): boolean;
  abstract export(config: ExportConfig): Promise<void>;
}
