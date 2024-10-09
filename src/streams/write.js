import fs from 'fs';
import process from 'process';
import path from 'path';

const write = async () => {
    // Write your code here
    const filePath = path.resolve('src/streams/files', 'fileToWrite.txt');
    const stream = fs.createWriteStream(filePath);
    stream.on('err', () => {console.log(err)});
    process.stdin.pipe(stream);
};

await write();