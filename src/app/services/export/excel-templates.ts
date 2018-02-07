// tslint:disable:max-line-length
export class ExcelTemplates {

    // Static file contents
    public static rels = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\
    <Relationship Id="rId1" Target="xl/workbook.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument"/>\
    </Relationships>';
    public static contentTypes = '<?xml version="1.0" ?>\
    <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\
    <Default ContentType="application/xml" Extension="xml"/>\
    <Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>\
    <Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml"/>\
    <Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml"/>\
    </Types>';
    public static ct = '<?xml version="1.0" ?>\
    <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">\
    <Default ContentType="application/xml" Extension="xml"/>\
    <Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>\
    <Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet1.xml"/>\
    <Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml"/>\
    </Types>';
    public static workbookRels = '<?xml version="1.0" ?>\
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\
    <Relationship Id="rId1" Target="worksheets/sheet1.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"/>\
    </Relationships>';
    public static workbook = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\
    <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">\
    <workbookPr/>\
    <sheets><sheet state="visible" name="Sheet1" sheetId="1" r:id="rId1"/></sheets>\
    <definedNames/><calcPr/>\
    </workbook>';

    // File contents template; replace {sheetData_content} with worksheet data
    public static worksheetToken = '{sheetData_content}';
    public static worksheet = `<?xml version="1.0" ?>
    <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">\
    <sheetData>{sheetData_content}</sheetData></worksheet>`;

}
