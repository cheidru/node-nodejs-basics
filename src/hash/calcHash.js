import crypto from 'crypto';
import fs from 'fs';
import process from 'process';

const calculateHash = async () => {
    // Write your code here
    const sha256Hash = crypto.createHash('sha256');

    fs.readFile('files/fileToCalculateHashFor.txt', (err, data) => {
        if(err) throw err;
        sha256Hash.update(data);
        process.stdout.write(sha256Hash.digest('hex'))
        // console.log(sha256Hash.digest('hex'));
    })
};

await calculateHash();