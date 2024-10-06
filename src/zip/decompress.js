import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
    // Write your code here
        const origFile = fs.createReadStream('files/archive.gz');
        const resFile = fs.createWriteStream('files/fileToCompress.txt');
        origFile.pipe(zlib.createGunzip()).pipe(resFile);

};

await decompress();