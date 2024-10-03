const fs = require('fs');
const process = require('process');

const read = async () => {
    // Write your code here
    const stream = fs.createReadStream('files/fileToRead.txt');
    stream.pipe(process.stdout);
};

await read();