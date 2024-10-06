import fs from 'fs';
import process from 'process';

const read = async () => {
    // Write your code here
    const stream = fs.createReadStream('files/fileToRead.txt');
    stream.on('err', () => {console.log(err)});
    stream.pipe(process.stdout);
};

await read();