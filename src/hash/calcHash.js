const crypto = require('crypto');
const fs = require('fs');
const stream = require('stream');

// https://www.techiedelight.com/generate-sha-256-hash-javascript/
// https://nodejs.org/dist/latest-v22.x/docs/api/crypto.html#cryptocreatehashalgorithm-options
// https://nodejs.org/dist/latest-v22.x/docs/api/crypto.html#hashupdatedata-inputencoding
// https://nodejs.org/api/stream.html

const calculateHash = async () => {
    // Write your code here
    const sha256Hash = crypto.createHash('sha256');

    fs.readFile('files/fileToCalculateHashFor.txt', (err, data) => {
        if(err) throw err;
        sha256Hash.update(data);
    })    

    const hashCode = sha256Hash.digest('hex');
    const writableStream = new stream.Writable();
    writableStream._write = (hashCode, encoding, next) => {
        console.log(hashCode.toString());
        next();
    }
};

await calculateHash();