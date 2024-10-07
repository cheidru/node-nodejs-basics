import zlib from 'zlib';
import fs from 'fs';
import path from 'path';

const decompress = async () => {
    // Write your code here
    const origPath = path.resolve('src/zip/files', 'archive.gz');
    const origFile = fs.createReadStream(origPath);
    const resPath = path.resolve('src/zip/files', 'fileToCompress.txt');
    const resFile = fs.createWriteStream(resPath);
    origFile.pipe(zlib.createGunzip()).pipe(resFile);

};

await decompress();