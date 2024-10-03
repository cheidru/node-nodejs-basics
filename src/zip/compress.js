const zlib = require('zlib');
const { pipeline } = require('stream');
const fs = require('fs');

const { promisify } = require('util');
const pipe = promisify(pipeline);

const compress = async () => {
    // Write your code here
    async function do_gzip(input, output) {
        const gzip = zlib.createGzip();
        const origFile = fs.createReadStream(input);
        const resFile = fs.createWriteStream(output);
        await pipe(origFile, gzip, resFile);
    }

    do_gzip('files/fileToCompress.txt', 'files/archive.gz')
    .catch((err) => {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    });    
};

await compress();


    

  

