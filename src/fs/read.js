import fs from 'fs';
import path from 'path';

const read = async () => {
    // Write your code here
    const filePath = path.resolve('src/fs/files', 'fileToRead.txt');
    fs.access(filePath, (error) => {
        if (error) {
            throw new Error ("FS operation failed");
        } else {
            fs.readFile(filePath, 'utf8', (err, data) => {
                if(err) throw err;
                console.log(data);
            })
        }
    });
};

await read();