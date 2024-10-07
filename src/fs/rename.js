import fs from 'fs';
import path from 'path';

const rename = async () => {
    // Write your code here
    const wrongFilePath = path.resolve('src/fs/files', 'wrongFilename.txt');
    const properFilePath = path.resolve('src/fs/files', 'properFilename.md'); 
    fs.access(wrongFilePath, (error) => {
        if (error) {
            // file wrongFilename.txt doesn't exists
            throw new Error ("FS operation failed");
        } else {
            fs.access(properFilePath, (error) => {
                if (error) {
                    fs.rename(wrongFilePath, properFilePath, (error) => {
                        if (error) console.log(error)});
                } else {
                    throw new Error ("FS operation failed");                
                };
            });
        }
    });
};

await rename();