const zlib = require('zlib');
const { pipeline } = require('stream');
const fs = require('fs');

const { promisify } = require('util');
const pipe = promisify(pipeline);

const decompress = async () => {
    // Write your code here
    async function do_gunzip(input, output) {
        const gunzip = zlib.createGunzip();
        const origFile = fs.createReadStream(input);
        const resFile = fs.createWriteStream(output);
        await pipe(origFile, gunzip, resFile);
    }

    do_gunzip('files/archive.gz', 'files/fileToCompress.txt')
    .catch((err) => {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }); 
};

await decompress();