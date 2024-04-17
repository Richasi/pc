const fs = require('fs').promises;

// Function to read a file asynchronously
async function readFile(filePath) {
    try {
        return await fs.readFile(filePath, 'utf8');
    } catch (err) {
        throw err;
    }
}

// Function to aggregate data from multiple files
async function aggregateFiles(filePaths) {
    let aggregatedData = '';

    for (const filePath of filePaths) {
        try {
            const data = await readFile(filePath);
            aggregatedData += data;
        } catch (err) {
            throw err;
        }
    }

    return aggregatedData;
}

// Usage example
const files = ['file1.txt', 'file2.txt'];
aggregateFiles(files)
    .then(data => {
        console.log('Aggregated data:', data);
    })
    .catch(err => {
        console.error('Error:', err);
    });
