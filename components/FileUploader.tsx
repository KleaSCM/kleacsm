import React from 'react';
import * as XLSX from 'xlsx';

const FileUploader: React.FC<{ onDataParsed: (data: any[]) => void }> = ({ onDataParsed }) => {
    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target?.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0];
                const worksheet: any[][] = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 });

                const headers = worksheet[0]; // This will be an array of headers
                const rawData = worksheet.slice(1); // The actual data, skipping headers row
                const parsedData = rawData.map((row: any[]) => {
                    const obj: any = {};
                    headers.forEach((header, index) => {
                        obj[header] = row[index]; // Map each row's data to the header
                    });
                    return obj;
                });

                console.log("Parsed Data:", parsedData);
                onDataParsed(parsedData); // Pass parsed data to parent component
            };
            reader.readAsArrayBuffer(file);
        }
    };

    return <input type="file" onChange={handleFileUpload} />;
};

export default FileUploader;
