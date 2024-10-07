import fs from 'fs';
import process from 'process';
import path from 'path';

const read = async () => {
    // Write your code here
    const filePath = path.resolve('src/streams/files', 'fileToRead.txt');
    const stream = fs.createReadStream('./files/fileToRead.txt');
    stream.on('err', () => {console.log(err)});
    stream.pipe(process.stdout);
};

await read();