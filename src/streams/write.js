import fs from 'fs';
import process from 'process';

const write = async () => {
    // Write your code here
    const stream = fs.createWriteStream('files/fileToWrite.txt');
    stream.on('err', () => {console.log(err)});
    process.stdin.pipe(stream);
};

await write();