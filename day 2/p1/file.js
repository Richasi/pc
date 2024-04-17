const fs = require('fs');

// Function to read a file asynchronously
function readFile(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            callback(err);
        } else {
            callback(null, data);
        }
    });
}

// Function to aggregate data from multiple files
function aggregateFiles(filePaths, callback) {
    let aggregatedData = '';
    let filesProcessed = 0;

    filePaths.forEach(filePath => {
        readFile(filePath, (err, data) => {
            if (err) {
                callback(err);
                return;
            }

            aggregatedData += data;
            filesProcessed++;

            if (filesProcessed === filePaths.length) {
                callback(null, aggregatedData);
            }
        });
    });
}

// Usage example
const files = ['file1.txt', 'file2.txt'];
aggregateFiles(files, (err, data) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Aggregated data:', data);
    }
});
