import fs from 'fs';
import path from 'path';

const remove = async () => {
    const fileToDelete = path.resolve('src/fs/files', 'fileToRemove.txt');
    // Write your code here
    fs.access(fileToDelete, (error) => {
        if (error) {
            throw new Error ("FS operation failed");
        } else {
            fs.unlink(fileToDelete, (error) => {
                if (error) console.log(error)});
        }
    })
};

await remove();