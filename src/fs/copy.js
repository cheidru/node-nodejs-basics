import fs from 'fs';
import path from 'path';

const copy = async () => {
    // Write your code here
    const filesFolder = path.resolve('src/fs/files');
    const copyFolder = path.resolve('src/fs/files_copy');
        // check if 'files' folder exists
        fs.access(filesFolder, (error) => {
            if (error) {
                console.log('filesFolder exists');
                throw new Error ("FS operation failed");
            } else {
                // check if 'files_copy' folder exists
                fs.access(copyFolder, (error) => {
                    if (error) {
                        // create 'files_copy' folder
                        fs.mkdir(copyFolder, (err) => {
                            if (err ) console.log(err)});
                        // copy files and folders
                        fs.cp(filesFolder, copyFolder, { recursive: true }, (err) => {
                            if (err) console.log(err)});
                    } else {
                        throw new Error ("FS operation failed");                
                    };
                });
            }
        });
};

await copy();
