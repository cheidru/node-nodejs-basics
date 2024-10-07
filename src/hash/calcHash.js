import crypto from 'crypto';
import fs from 'fs';
import process from 'process';
import path from 'path';

const calculateHash = async () => {
    // Write your code here
    const sha256Hash = crypto.createHash('sha256');
    const filePath = path.resolve('src/hash/files', 'fileToCalculateHashFor.txt');

    fs.readFile(filePath, (err, data) => {
        if(err) throw err;
        sha256Hash.update(data);
        // console.log(sha256Hash.digest('hex'));
        process.stdout.write(sha256Hash.digest('hex') + '\n');
    })
};

await calculateHash();