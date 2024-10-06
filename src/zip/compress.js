import zlib from 'zlib';
import fs from 'fs';

const compress = async () => {
    // Write your code here
        const origFile = fs.createReadStream('files/fileToCompress.txt');
        const resFile = fs.createWriteStream('files/archive.gz');
        origFile.pipe(zlib.createGzip()).pipe(resFile);
};

await compress();


    

  

