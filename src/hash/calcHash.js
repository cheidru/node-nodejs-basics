const crypto = require('crypto');
const fs = require('fs');
const stdout = require('process');

// const stream = require('stream');

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

    sha256Hash.digest('hex').stdout;
    // const writableStream = new stream.Writable();
    // writableStream._write = (hashCode, encoding, next) => {
        // console.log(hashCode.toString());
    //     next();
    // }
};

await calculateHash();

// https://blog.dennisokeeffe.com/blog/2024-07-12-transform-streams-in-nodejs%20copy
//
// const crypto = require("node:crypto");
// const fs = require("node:fs");
// 
// const algorithm = "aes-192-cbc";
// const password = "Password used to generate key";
// 
// const key = crypto.scryptSync(password, "salt", 24);
// const iv = Buffer.alloc(16, 0);
// 
// const cipher = crypto.createCipheriv(algorithm, key, iv);
// 
// const input = fs.createReadStream("input.txt");
// const output = fs.createWriteStream("encrypted.txt");
// 
// input.pipe(cipher).pipe(output);
// 
// output.on("finish", () => console.log("File encrypted successfully"));