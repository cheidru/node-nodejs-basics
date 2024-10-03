const fs = require('fs');
const process = require('process');

const write = async () => {
    // Write your code here
    const stream = fs.createWriteStream('files/fileToWrite.txt');
    stream.pipe(process.stdin);
};

await write();