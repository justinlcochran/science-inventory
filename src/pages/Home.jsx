import React, { useState } from "react";
import CSVReader from "react-csv-reader";

const CsvReader = () => {
    const [csvData, setCsvData] = useState(null);
    const [constData, setConstData] = useState(null)
    const const_data = [];
    const handleCsvFileLoaded = (data, fileInfo) => {
        // 'data' parameter contains the parsed CSV data as an array of objects
        // 'fileInfo' parameter contains information about the loaded CSV file

        // You can perform any desired operations with the CSV data here, such as saving it to state, passing it to another component, etc.
        console.log("CSV Data:", data, fileInfo);
        setCsvData(data);
        for (let i = 0; i < data.length; i++) {
            const row = data[i]; // Get the current row from data array

            if (!const_data.some(item => item[0] === row[0])) {
                // Check if row[0] is not present in const_data array
                const_data.push(row); // Append row to const_data array
            }
        }
        setConstData(const_data)
    };

    const handleCsvError = (err) => {
        // 'err' parameter contains any error that occurred while loading the CSV file
        console.error("CSV Error:", err);
    };

    return (
        <div>
            <h1>CSV Reader</h1>
            <CSVReader
                cssClass="csv-reader-input"
                label="Select CSV file"
                onFileLoaded={handleCsvFileLoaded}
                onError={handleCsvError}
            />
            {csvData && (
                <div>
                    <h2>CSV Contents:</h2>
                    <ul>
                        {constData.map((row, index) => (
                            <div className={"grid grid-cols-5"}>
                                {(row[1].trim().toLowerCase().endsWith("g") || row[1].trim().toLowerCase().endsWith("grams")) ? row.map(item => <li className={"text-green-500"} key={index}>{item}</li>)
                                    : (row[1].trim().toLowerCase().endsWith("bags") || row[1].trim().toLowerCase().endsWith("bages")) ? row.map(item => <li className={"text-violet-500"} key={index}>{item}</li>)
                                    : (row[1].trim().toLowerCase().endsWith("ml") || row[1].trim().toLowerCase().endsWith("l")) ? row.map(item => <li className={"text-blue-500"} key={index}>{item}</li>)
                                    : (row[1].trim().toLowerCase().endsWith("z")) ? row.map(item => <li className={"text-teal-400"} key={index}>{item}</li>)
                                    : (row[1].trim().toLowerCase().endsWith("viyls") || row[1].trim().toLowerCase().endsWith("viyl")) ? row.map(item => <li className={"text-amber-950-400"} key={index}>{item}</li>)
                                    : row.map(item => <li className={"text-red-500"} key={index}>{item}</li>)}
                            </div>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CsvReader;