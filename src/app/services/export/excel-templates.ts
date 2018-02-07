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
    <Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml"/>\
    </Types>';
    public static workbookRels = '<?xml version="1.0" ?>\
    <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">\
    <Relationship Id="rId1" Target="worksheets/sheet1.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"/>\
    <Relationship Id="rId2" Target="styles.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles"/>\
    </Relationships>';
    public static styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\
    <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac x16r2 xr" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" xmlns:x16r2="http://schemas.microsoft.com/office/spreadsheetml/2015/02/main" xmlns:xr="http://schemas.microsoft.com/office/spreadsheetml/2014/revision">\
        <numFmts count="1">\
            <numFmt numFmtId="167" formatCode="[$-409]m/d/yy\ h:mm\ AM/PM;@"/>\
        </numFmts>\
        <fonts count="1" x14ac:knownFonts="1">\
            <font>\
                <sz val="12"/>\
                <color theme="1"/>\
                <name val="Calibri"/>\
                <family val="2"/>\
                <scheme val="minor"/>\
            </font>\
        </fonts>\
        <fills count="2">\
            <fill>\
                <patternFill patternType="none"/>\
            </fill>\
            <fill>\
                <patternFill patternType="gray125"/>\
            </fill>\
        </fills>\
        <borders count="1">\
            <border>\
                <left/>\
                <right/>\
                <top/>\
                <bottom/>\
                <diagonal/>\
            </border>\
        </borders>\
        <cellStyleXfs count="1">\
            <xf numFmtId="0" fontId="0" fillId="0" borderId="0"/>\
        </cellStyleXfs>\
        <cellXfs count="2">\
            <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>\
            <xf numFmtId="167" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>\
        </cellXfs>\
        <cellStyles count="1">\
            <cellStyle name="Normal" xfId="0" builtinId="0"/>\
        </cellStyles>\
        <dxfs count="0"/>\
    </styleSheet>';
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
